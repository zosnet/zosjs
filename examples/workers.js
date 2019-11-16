import {Apis} from "zosjs-ws";
import {ChainStore} from "../lib";

Apis.instance("wss://bitshares.openledger.info/ws", true).init_promise.then((res) => {
    console.log("connected to:", res[0].network);
    ChainStore.fetchAllWorkers().then(workers => {
        console.log("workers:", workers);
    });

    // ChainStore.init().then(() => {
    //     ChainStore.subscribe(updateState);
    // });
});
