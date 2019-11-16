var ChainTypes = {};

ChainTypes.reserved_spaces = {
  relative_protocol_ids: 0,
  protocol_ids: 1,
  implementation_ids: 2
};

ChainTypes.object_type = {
  "null": 0,
  base: 1,
  account: 2,
  asset: 3,
  force_settlement: 4,
  committee_member: 5,
  witness: 6,
  limit_order: 7,
  call_order: 8,
  custom: 9,
  proposal: 10,
  operation_history: 11,
  withdraw_permission: 12,
  vesting_balance: 13,
  worker: 14,
  balance: 15,
  //以下为新增
  bitlender_option: 16,
  bitlender_order: 17,
  issue_fundraise: 18,
  buy_fundraise: 19,
  gateway: 20,
  carrier: 21,
  budget_member: 22,
  sell_exchange: 23,
  buy_exchange: 24,
  author: 25,
  locktoken: 26
};

ChainTypes.impl_object_type = {
  global_property: 0,
  dynamic_global_property: 1,
  index_meta: 2,
  asset_dynamic_data: 3,
  asset_bitasset_data: 4,
  account_balance: 5,
  account_statistics: 6,
  transaction: 7,
  block_summary: 8,
  account_transaction_history: 9,
  blinded_balance: 10,
  chain_property: 11,
  witness_schedule: 12,
  budget_record: 13
};

ChainTypes.vote_type = {
  committee: 0,
  witness: 1,
  worker: 2
};

ChainTypes.operations = {
  transfer: 0,
  limit_order_create: 1,
  limit_order_cancel: 2,
  call_order_update: 3,
  fill_order: 4,
  account_create: 5,
  account_update: 6,
  account_whitelist: 7,
  account_upgrade: 8,
  account_transfer: 9,
  asset_create: 10,
  asset_update: 11,
  asset_update_bitasset: 12,
  asset_update_feed_producers: 13,
  asset_issue: 14,
  asset_reserve: 15,
  asset_fund_fee_pool: 16,
  asset_settle: 17,
  asset_global_settle: 18,
  asset_publish_feed: 19,
  witness_create: 20,
  witness_update: 21,
  proposal_create: 22,
  proposal_update: 23,
  proposal_delete: 24,
  withdraw_permission_create: 25,
  withdraw_permission_update: 26,
  withdraw_permission_claim: 27,
  withdraw_permission_delete: 28,
  committee_member_create: 29,
  committee_member_update: 30,
  committee_member_update_global_parameters: 31,
  vesting_balance_create: 32,
  vesting_balance_withdraw: 33,
  worker_create: 34,
  custom: 35,
  assert: 36,
  balance_claim: 37,
  override_transfer: 38,
  transfer_to_blind: 39,
  blind_transfer: 40,
  transfer_from_blind: 41,
  asset_settle_cancel: 42,
  asset_claim_fees: 43,
  fba_distribute: 44,       // VIRTUAL
  bid_collateral: 45,
  execute_bid: 46,           // VIRTUAL

  account_property: 47,       //赋权网关或者运营商
  gateway_withdraw: 48,       //提币
  gateway_deposit: 49,        //充值
  gateway_issue_currency: 50,   //给网关发行货币
  bitlender_option_create: 51,    //创建法币参数
  bitlender_option_author: 52,    //创建法币董事会
  bitlender_option_update: 53,    //修改法币参数
  bitlender_rate_update: 54,    //修改法币率利
  asset_property: 55,           //赋权资产为法币或可抵押数字货币
  bitlender_lend_order: 56,   //创建借款订单
  bitlender_invest: 57,     //投资订单
  bitlender_repay_interest: 58,     //还息
  bitlender_overdue_interest: 59,   //逾期还息
  bitlender_repay_principal: 60,    //还本
  bitlender_prepayment: 61,         //提前还本
  bitlender_overdue_repay: 62,      //逾期还本
  bitlender_add_collateral: 63,      //添加抵押
  bitlender_recycle: 64,             //处理不良资产
  bitlender_setautorepayer: 65,    //自动还款账户
  fill_loan: 66,                 // VIRTUAL

  finance_option_create: 67,  //创建筹资参数
  finance_option_update: 68,  //修改筹资参数
  buy_finance_create: 69,         //筹资
  buy_finance_enable: 70,         //筹资有效

  account_coupon: 71,         //增加优惠卷
  change_identity: 72,         //激活见证人
  bitlender_autorepayment: 73,   //自动还款
  account_withdraw_fee: 74,   //提取费用
  bitlender_paramers_update_operation: 75,    //修改借贷系统参数
  gateway_create: 76,           //创建网关
  gateway_update: 77,   //更新网关
  carrier_create: 78,   //创建运营商
  carrier_update: 79,   //更新运营商
  budget_member_create: 80,     //创建预算委员会成员
  budget_member_update: 81,     //更新预算委员会成员
  transfer_vesting_operation: 82,    //锁定转账
  revoke_vesting_operation: 83,      //取消锁定转账
  bitlender_remove_operation: 84,    //取消借款      
  bitlender_squeeze_operation: 85,   //VIRTUAL
  bitlender_publish_feed_operation: 86,   //借贷喂价  
  bitlender_update_feed_producers_operation: 87,   //更新借贷喂价人
  bitlender_test_operation: 88,   //
  bitlender_option_stop: 89,    //借贷停运
  issue_fundraise_publish_feed: 90,   //众筹喂价
  finance_paramers_update: 91,      //众筹系统参数

  sell_exchange_create: 92,       //发布兑换
  sell_exchange_update: 93,      //更新兑换
  sell_exchange_remove: 94,      //删除兑换
  buy_exchange_create: 95,      //发布购买
  buy_exchange_update: 96,     //更新购买
  buy_exchange_remove: 97,     //删除购买
  issue_fundraise_remove: 98,   //删除筹资
  bitlender_option_fee_mode: 99, //修改法币参数
  account_authenticate: 100,     //认证信息
  author_create: 101,     //101 创建认证人
  author_update: 102,      //102 更新认证人
  bitlender_recycle_interest: 103,   //103 利息逾期
  account_config_operation: 104,   //用户配置
  asset_update_gateway: 105,   //105 更新资产网关     
  committee_member_update_zos_parameters: 106,   //106 修改ZOS系统参数     
  locktoken_create: 107,   //107 创建锁仓
  locktoken_update: 108,   //108 修改锁仓
  locktoken_remove: 109,   //109  取消锁仓  
  locktoken_node: 110,   //110 收益锁仓
  asset_locktoken: 111   //111 锁仓参数
};

export default ChainTypes;
