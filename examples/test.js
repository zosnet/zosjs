
import {Apis} from "zosjs-ws";
let localNode = "ws://47.75.107.157:8290";

let bizType = {
    get_can_withdraw:0,
    get_can_deposit:1,
    get_can_loan:2 ,
    get_can_invest:3
}
/**
 * 验证userId做充、提、借、投等业务是否已经认证过(或者不需要认证)
 * @param userId
 * @param adminId
 * @param assetId
 * @param doBizType {get_can_withdraw:0、get_can_deposit:1、get_can_loan:2、get_can_invest:3}
 * @returns {Promise<*>} 0:没有通过认证、1:通过认证
 */
const is_authenticator = async (userId, adminId, assetId,doBizType)=>{
    let gateway_cfg = await  Apis.instance().admin_api().exec("get_gateway", [adminId, assetId])
    console.log("gateway_cfg:",gateway_cfg)
    if(!gateway_cfg){
        return 0;
    }
    let gatewayAccountId = gateway_cfg[0]["account_id"]
    let checkRes = await Apis.instance().db_api().exec("is_authenticator", [userId,  doBizType ,assetId, gatewayAccountId])
    console.log("checkRes:",checkRes)
    return checkRes;
}
//测试
Apis.instance(localNode, true).init_promise.then(() => {
    let userId = "1.2.165"  //dylan
    let adminId = "1.2.139" //admin-lending
    let assetId = "1.3.20"  //CNY
    let doBizType = bizType.get_can_deposit
    is_authenticator(userId, adminId, assetId,doBizType);
});