import {Apis} from "zosjs-ws";
import {ChainStore, FetchChain, PrivateKey, TransactionHelper, Aes, TransactionBuilder} from "../lib";

var privKey = "5JMzvt4KwBbi9SZRyFRZg5RfEwAH2m426hBQMEGnLzTBqKqcjQH";
let pKey = PrivateKey.fromWif(privKey);

Apis.instance("wss://node.testnet.bitshares.eu", true)
.init_promise.then((res) => {
    console.log("connected to:", res[0].network_name, "network");

    ChainStore.init().then(() => {

        let fromAccount = "svk-brainkey1";
        let memoSender = fromAccount;
        let memo = "Testing transfer from node.js";

        let toAccount = "graphenejs-lib";

        let sendAmount = {
            amount: 100000,
            asset: "TEST"
        }

        Promise.all([
                FetchChain("getAccount", fromAccount, 5000),
                FetchChain("getAccount", toAccount, 5000),
                FetchChain("getAccount", memoSender, 5000),
                FetchChain("getAsset", sendAmount.asset, 5000)
            ]).then((res)=> {
                // console.log("got data:", res);
                let [fromAccount, toAccount, memoSender, sendAsset] = res;

                // Memos are optional, but if you have one you need to encrypt it here
                let memoFromKey = memoSender.getIn(["options","memo_key"]);
                console.log("memo pub key:", memoFromKey);
                let memoToKey = toAccount.getIn(["options","memo_key"]);
                let nonce = TransactionHelper.unique_nonce_uint64();

                let memo_object = {
                    from: memoFromKey,
                    to: memoToKey,
                    nonce,
                    message: Aes.encrypt_with_checksum(
                        pKey,
                        memoToKey,
                        nonce,
                        memo
                    )
                }

                let tr = new TransactionBuilder()

                tr.add_type_operation( "transfer", {
                    fee: {
                        amount: 0,
                        asset_id: "1.3.0"
                    },
                    from: fromAccount.get("id"),
                    to: toAccount.get("id"),
                    amount: { amount: sendAmount.amount, asset_id: sendAsset.get("id") },
                    memo: memo_object
                } )

                tr.set_required_fees().then(() => {
                    tr.add_signer(pKey, pKey.toPublicKey().toPublicKeyString());
                    console.log("serialized transaction:", tr.serialize());
                    tr.broadcast();
                })
            }).catch(err => {
                console.log("err:", err);
            })
    });
});
