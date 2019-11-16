import types from "./types";
import SerializerImpl from "./serializer";

var uint8 = types.uint8,
  uint16 = types.uint16,
  uint32 = types.uint32,
  int64 = types.int64,
  uint64 = types.uint64,
  string = types.string,
  bytes = types.bytes,
  bool = types.bool,
  array = types.array,
  fixed_array = types.fixed_array,
  protocol_id_type = types.protocol_id_type,
  object_id_type = types.object_id_type,
  vote_id = types.vote_id,
  future_extensions = types.future_extensions,
  static_variant = types.static_variant,
  map = types.map,
  set = types.set,
  public_key = types.public_key,
  address = types.address,
  time_point_sec = types.time_point_sec,
  optional = types.optional;

future_extensions = types.void;

/*
 When updating generated code
 Replace:  operation = static_variant [
 with:     operation.st_operations = [

 Delete:
 public_key = new Serializer(
 "public_key"
 key_data: bytes 33
 )

 */
// Place-holder, their are dependencies on "operation" .. The final list of
// operations is not avialble until the very end of the generated code.
// See: operation.st_operations = ...
var operation = static_variant();
// module.exports["operation"] = operation;

export {operation};
// For module.exports
var Serializer = function Serializer(
  operation_name,
  serilization_types_object
) {
  return new SerializerImpl(operation_name, serilization_types_object);
  // return module.exports[operation_name] = s;
};

// Custom-types follow Generated code:

// ##  Generated code follows
// # programs/js_operation_serializer > npm i -g decaffeinate
// ## -------------------------------
export var transfer_operation_fee_parameters = new Serializer(
  "transfer_operation_fee_parameters",
  {
    fee: uint64,
    price_per_kbyte: uint32
  }
);

export var limit_order_create_operation_fee_parameters = new Serializer(
  "limit_order_create_operation_fee_parameters",
  {fee: uint64}
);

export var limit_order_cancel_operation_fee_parameters = new Serializer(
  "limit_order_cancel_operation_fee_parameters",
  {fee: uint64}
);

export var call_order_update_operation_fee_parameters = new Serializer(
  "call_order_update_operation_fee_parameters",
  {fee: uint64}
);

export var fill_order_operation_fee_parameters = new Serializer(
  "fill_order_operation_fee_parameters"
);

export var account_create_operation_fee_parameters = new Serializer(
  "account_create_operation_fee_parameters",
  {
    basic_fee: uint64,
    premium_fee: uint64,
    price_per_kbyte: uint32
  }
);

export var account_update_operation_fee_parameters = new Serializer(
  "account_update_operation_fee_parameters",
  {
    fee: int64,
    price_per_kbyte: uint32
  }
);

export var account_whitelist_operation_fee_parameters = new Serializer(
  "account_whitelist_operation_fee_parameters",
  {fee: int64}
);

export var account_upgrade_operation_fee_parameters = new Serializer(
  "account_upgrade_operation_fee_parameters",
  {
    membership_annual_fee: uint64,
    membership_lifetime_fee: uint64
  }
);

export var account_transfer_operation_fee_parameters = new Serializer(
  "account_transfer_operation_fee_parameters",
  {fee: uint64}
);

export var asset_create_operation_fee_parameters = new Serializer(
  "asset_create_operation_fee_parameters",
  {
    symbol3: uint64,
    symbol4: uint64,
    long_symbol: uint64,
    price_per_kbyte: uint32
  }
);

export var asset_update_operation_fee_parameters = new Serializer(
  "asset_update_operation_fee_parameters",
  {
    fee: uint64,
    price_per_kbyte: uint32
  }
);

export var asset_update_bitasset_operation_fee_parameters = new Serializer(
  "asset_update_bitasset_operation_fee_parameters",
  {fee: uint64}
);

export var asset_update_feed_producers_operation_fee_parameters = new Serializer(
  "asset_update_feed_producers_operation_fee_parameters",
  {fee: uint64}
);

export var asset_issue_operation_fee_parameters = new Serializer(
  "asset_issue_operation_fee_parameters",
  {
    fee: uint64,
    price_per_kbyte: uint32
  }
);

export var asset_reserve_operation_fee_parameters = new Serializer(
  "asset_reserve_operation_fee_parameters",
  {fee: uint64}
);

export var asset_fund_fee_pool_operation_fee_parameters = new Serializer(
  "asset_fund_fee_pool_operation_fee_parameters",
  {fee: uint64}
);

export var asset_settle_operation_fee_parameters = new Serializer(
  "asset_settle_operation_fee_parameters",
  {fee: uint64}
);

export var asset_global_settle_operation_fee_parameters = new Serializer(
  "asset_global_settle_operation_fee_parameters",
  {fee: uint64}
);

export var asset_publish_feed_operation_fee_parameters = new Serializer(
  "asset_publish_feed_operation_fee_parameters",
  {fee: uint64}
);

export var witness_create_operation_fee_parameters = new Serializer(
  "witness_create_operation_fee_parameters",
  {fee: uint64}
);

export var witness_update_operation_fee_parameters = new Serializer(
  "witness_update_operation_fee_parameters",
  {fee: int64}
);

export var proposal_create_operation_fee_parameters = new Serializer(
  "proposal_create_operation_fee_parameters",
  {
    fee: uint64,
    price_per_kbyte: uint32
  }
);

export var proposal_update_operation_fee_parameters = new Serializer(
  "proposal_update_operation_fee_parameters",
  {
    fee: uint64,
    price_per_kbyte: uint32
  }
);

export var proposal_delete_operation_fee_parameters = new Serializer(
  "proposal_delete_operation_fee_parameters",
  {fee: uint64}
);

export var withdraw_permission_create_operation_fee_parameters = new Serializer(
  "withdraw_permission_create_operation_fee_parameters",
  {fee: uint64}
);

export var withdraw_permission_update_operation_fee_parameters = new Serializer(
  "withdraw_permission_update_operation_fee_parameters",
  {fee: uint64}
);

export var withdraw_permission_claim_operation_fee_parameters = new Serializer(
  "withdraw_permission_claim_operation_fee_parameters",
  {
    fee: uint64,
    price_per_kbyte: uint32
  }
);

export var withdraw_permission_delete_operation_fee_parameters = new Serializer(
  "withdraw_permission_delete_operation_fee_parameters",
  {fee: uint64}
);

export var committee_member_create_operation_fee_parameters = new Serializer(
  "committee_member_create_operation_fee_parameters",
  {fee: uint64}
);

export var committee_member_update_operation_fee_parameters = new Serializer(
  "committee_member_update_operation_fee_parameters",
  {fee: uint64}
);

export var committee_member_update_global_parameters_operation_fee_parameters = new Serializer(
  "committee_member_update_global_parameters_operation_fee_parameters",
  {fee: uint64}
);

export var vesting_balance_create_operation_fee_parameters = new Serializer(
  "vesting_balance_create_operation_fee_parameters",
  {fee: uint64}
);

export var vesting_balance_withdraw_operation_fee_parameters = new Serializer(
  "vesting_balance_withdraw_operation_fee_parameters",
  {fee: uint64}
);

export var worker_create_operation_fee_parameters = new Serializer(
  "worker_create_operation_fee_parameters",
  {fee: uint64}
);

export var custom_operation_fee_parameters = new Serializer(
  "custom_operation_fee_parameters",
  {
    fee: uint64,
    price_per_kbyte: uint32
  }
);

export var assert_operation_fee_parameters = new Serializer(
  "assert_operation_fee_parameters",
  {fee: uint64}
);

export var balance_claim_operation_fee_parameters = new Serializer(
  "balance_claim_operation_fee_parameters"
);

export var override_transfer_operation_fee_parameters = new Serializer(
  "override_transfer_operation_fee_parameters",
  {
    fee: uint64,
    price_per_kbyte: uint32
  }
);

export var transfer_to_blind_operation_fee_parameters = new Serializer(
  "transfer_to_blind_operation_fee_parameters",
  {
    fee: uint64,
    price_per_output: uint32
  }
);

export var blind_transfer_operation_fee_parameters = new Serializer(
  "blind_transfer_operation_fee_parameters",
  {
    fee: uint64,
    price_per_output: uint32
  }
);

export var transfer_from_blind_operation_fee_parameters = new Serializer(
  "transfer_from_blind_operation_fee_parameters",
  {fee: uint64}
);

export var asset_settle_cancel_operation_fee_parameters = new Serializer(
  "asset_settle_cancel_operation_fee_parameters"
);

export var asset_claim_fees_operation_fee_parameters = new Serializer(
  "asset_claim_fees_operation_fee_parameters",
  {fee: uint64}
);

var fee_parameters = static_variant([
  transfer_operation_fee_parameters,
  limit_order_create_operation_fee_parameters,
  limit_order_cancel_operation_fee_parameters,
  call_order_update_operation_fee_parameters,
  fill_order_operation_fee_parameters,
  account_create_operation_fee_parameters,
  account_update_operation_fee_parameters,
  account_whitelist_operation_fee_parameters,
  account_upgrade_operation_fee_parameters,
  account_transfer_operation_fee_parameters,
  asset_create_operation_fee_parameters,
  asset_update_operation_fee_parameters,
  asset_update_bitasset_operation_fee_parameters,
  asset_update_feed_producers_operation_fee_parameters,
  asset_issue_operation_fee_parameters,
  asset_reserve_operation_fee_parameters,
  asset_fund_fee_pool_operation_fee_parameters,
  asset_settle_operation_fee_parameters,
  asset_global_settle_operation_fee_parameters,
  asset_publish_feed_operation_fee_parameters,
  witness_create_operation_fee_parameters,
  witness_update_operation_fee_parameters,
  proposal_create_operation_fee_parameters,
  proposal_update_operation_fee_parameters,
  proposal_delete_operation_fee_parameters,
  withdraw_permission_create_operation_fee_parameters,
  withdraw_permission_update_operation_fee_parameters,
  withdraw_permission_claim_operation_fee_parameters,
  withdraw_permission_delete_operation_fee_parameters,
  committee_member_create_operation_fee_parameters,
  committee_member_update_operation_fee_parameters,
  committee_member_update_global_parameters_operation_fee_parameters,
  vesting_balance_create_operation_fee_parameters,
  vesting_balance_withdraw_operation_fee_parameters,
  worker_create_operation_fee_parameters,
  custom_operation_fee_parameters,
  assert_operation_fee_parameters,
  balance_claim_operation_fee_parameters,
  override_transfer_operation_fee_parameters,
  transfer_to_blind_operation_fee_parameters,
  blind_transfer_operation_fee_parameters,
  transfer_from_blind_operation_fee_parameters,
  asset_settle_cancel_operation_fee_parameters,
  asset_claim_fees_operation_fee_parameters
]);

export var fee_schedule = new Serializer("fee_schedule", {
  parameters: set(fee_parameters),
  scale: uint32
});

export var void_result = new Serializer("void_result");

export var asset = new Serializer("asset", {
  amount: int64,
  asset_id: protocol_id_type("asset")
});

export var bitlender_key = new Serializer("bitlender_key", {
  repayment_period_uint: uint8,
  repayment_type: uint8,
  loan_mode: uint8,
  op_type: uint8
}); 

var operation_result = static_variant([void_result, object_id_type, asset]);

export var processed_transaction = new Serializer("processed_transaction", {
  ref_block_num: uint16,
  ref_block_prefix: uint32,
  expiration: time_point_sec,
  operations: array(operation),
  extensions: set(future_extensions),
  signatures: array(bytes(65)),
  operation_results: array(operation_result)
});

export var signed_block = new Serializer("signed_block", {
  previous: bytes(20),
  timestamp: time_point_sec,
  witness: protocol_id_type("witness"),
  transaction_merkle_root: bytes(20),
  extensions: set(future_extensions),
  witness_signature: bytes(65),
  transactions: array(processed_transaction)
});

export var block_header = new Serializer("block_header", {
  previous: bytes(20),
  timestamp: time_point_sec,
  witness: protocol_id_type("witness"),
  transaction_merkle_root: bytes(20),
  extensions: set(future_extensions)
});

export var signed_block_header = new Serializer("signed_block_header", {
  previous: bytes(20),
  timestamp: time_point_sec,
  witness: protocol_id_type("witness"),
  transaction_merkle_root: bytes(20),
  extensions: set(future_extensions),
  witness_signature: bytes(65)
});

export var memo_data = new Serializer("memo_data", {
  from: public_key,
  to: public_key,
  nonce: uint64,
  message: bytes()
});

export var transfer = new Serializer("transfer", {
  fee: asset,
  from: protocol_id_type("account"),
  to: protocol_id_type("account"),
  amount: asset,
  memo: optional(memo_data),
  extensions: set(future_extensions)
});

export var limit_order_create = new Serializer("limit_order_create", {
  fee: asset,
  seller: protocol_id_type("account"),
  admin: protocol_id_type("account"),
  amount_to_sell: asset,
  min_to_receive: asset,
  memo: optional(string),
  expiration: time_point_sec,
  fill_mode: uint16,
  fill_or_kill: bool,
  extensions: set(future_extensions)
}); 

export var limit_order_cancel = new Serializer("limit_order_cancel", {
  fee: asset,  
  fee_paying_account: protocol_id_type("account"),
  order: protocol_id_type("limit_order"),
  extensions: set(future_extensions)
});

export var call_order_update = new Serializer("call_order_update", {
  fee: asset,
  funding_account: protocol_id_type("account"),
  delta_collateral: asset,
  delta_debt: asset,
  extensions: set(future_extensions)
});

export var fill_order = new Serializer("fill_order", {
  fee: asset,
  order_id: object_id_type,
  account_id: protocol_id_type("account"),
  pays: asset,
  receives: asset
});

export var authority = new Serializer("authority", {
  weight_threshold: uint32,
  account_auths: map(protocol_id_type("account"), uint16),
  key_auths: map(public_key, uint16),
  address_auths: map(address, uint16)
});

export var account_options = new Serializer("account_options", {
  memo_key: public_key,
  auth_key: public_key,
  voting_account: protocol_id_type("account"),
  num_witness: uint16,
  num_committee: uint16,
  num_budget: uint16,
  votes: set(vote_id),
  extensions: set(future_extensions)
});

export var no_special_authority = new Serializer("no_special_authority");

export var top_holders_special_authority = new Serializer("top_holders_special_authority", {
  asset: protocol_id_type("asset"),
  num_top_holders: uint8
});

var special_authority = static_variant([
  no_special_authority,
  top_holders_special_authority
]);

export var buyback_account_options = new Serializer("buyback_account_options", {
  asset_to_buy: protocol_id_type("asset"),
  asset_to_buy_issuer: protocol_id_type("account"),
  markets: set(protocol_id_type("account"))
});

export var account_create = new Serializer("account_create", {
  fee: asset,
  registrar: protocol_id_type("account"),
  referrer: protocol_id_type("account"),
  referrer_percent: uint16,
  name: string,
  owner: authority,
  active: authority,
  limitactive: authority,
  options: account_options,
  owner_special_authority: optional(special_authority),
  active_special_authority: optional(special_authority),
  buyback_options: optional(buyback_account_options),
  extensions: set(future_extensions)
});

export var account_update = new Serializer("account_update", {
  fee: asset,
  account: protocol_id_type("account"),
  owner: optional(authority),
  active: optional(authority),
  limitactive: optional(authority),
  new_options: optional(account_options),
  owner_special_authority: optional(special_authority),
  active_special_authority: optional(special_authority),
  extensions: set(future_extensions)
});

export var account_whitelist = new Serializer("account_whitelist", {
  fee: asset,
  authorizing_account: protocol_id_type("account"),
  account_to_list: protocol_id_type("account"),
  new_listing: uint8,
  extensions: set(future_extensions)
});

export var account_upgrade = new Serializer("account_upgrade", {
  fee: asset,
  account_to_upgrade: protocol_id_type("account"),
  upgrade_to_lifetime_member: bool,
  extensions: set(future_extensions)
});

export var account_transfer = new Serializer("account_transfer", {
  fee: asset,
  account_id: protocol_id_type("account"),
  new_owner: protocol_id_type("account"),
  extensions: set(future_extensions)
});

export var price = new Serializer("price", {
  base: asset,
  quote: asset
});

export var asset_options = new Serializer("asset_options", {
  max_supply: int64,
  market_fee_percent: uint16,
  max_market_fee: int64,
  issuer_permissions: uint16,
  flags: uint16,
  core_exchange_rate: price,
  whitelist_authorities: set(protocol_id_type("account")),
  blacklist_authorities: set(protocol_id_type("account")),
  whitelist_markets: set(protocol_id_type("asset")),
  blacklist_markets: set(protocol_id_type("asset")),
  description: string,
  extensions: set(future_extensions)
});

export var cashasset_options = new Serializer("cashasset_options", {
  base_interest_rate: uint32,
  interest_rate: uint32,
  repayment_type: uint32,
  max_bid_time: uint32,
  max_repayment_period: uint32
});

export var bitasset_options = new Serializer("bitasset_options", {
  feed_lifetime_sec: uint32,
  minimum_feeds: uint8,
  force_settlement_delay_sec: uint32,
  force_settlement_offset_percent: uint16,
  maximum_force_settlement_volume: uint16,
  short_backing_asset: protocol_id_type("asset"),
  extensions: set(future_extensions)
});

export var asset_create = new Serializer("asset_create", {
  fee: asset,
  issuer: protocol_id_type("account"),
  symbol: string,
  precision: uint8,
  common_options: asset_options,
  bitasset_opts: optional(bitasset_options),
  is_prediction_market: bool,
  extensions: set(future_extensions)
});

export var asset_update = new Serializer("asset_update", {
  fee: asset,
  issuer: protocol_id_type("account"),
  asset_to_update: protocol_id_type("asset"),
  new_issuer: optional(protocol_id_type("account")),
  new_options: asset_options,
  extensions: set(future_extensions)
});

export var asset_update_bitasset = new Serializer("asset_update_bitasset", {
  fee: asset,
  issuer: protocol_id_type("account"),
  asset_to_update: protocol_id_type("asset"),
  new_options: bitasset_options,
  extensions: set(future_extensions)
});

export var asset_update_feed_producers = new Serializer(
  "asset_update_feed_producers",
  {
    fee: asset,
    issuer: protocol_id_type("account"),
    asset_to_update: protocol_id_type("asset"),
    new_feed_producers: set(protocol_id_type("account")),
    extensions: set(future_extensions)
  }
);

export var asset_issue = new Serializer("asset_issue", {
  fee: asset,
  issuer: protocol_id_type("account"),
  asset_to_issue: asset,
  issue_to_account: protocol_id_type("account"),
  memo: optional(memo_data),
  extensions: set(future_extensions)
});

export var asset_reserve = new Serializer("asset_reserve", {
  fee: asset,
  payer: protocol_id_type("account"),
  amount_to_reserve: asset,
  extensions: set(future_extensions)
});

export var asset_fund_fee_pool = new Serializer("asset_fund_fee_pool", {
  fee: asset,
  from_account: protocol_id_type("account"),
  asset_id: protocol_id_type("asset"),
  amount: int64,
  extensions: set(future_extensions)
});

export var asset_settle = new Serializer("asset_settle", {
  fee: asset,
  account: protocol_id_type("account"),
  amount: asset,
  extensions: set(future_extensions)
});

export var asset_global_settle = new Serializer("asset_global_settle", {
  fee: asset,
  issuer: protocol_id_type("account"),
  asset_to_settle: protocol_id_type("asset"),
  settle_price: price,
  extensions: set(future_extensions)
});

export var price_feed = new Serializer("price_feed", {
  settlement_price: price,
  maintenance_collateral_ratio: uint16,
  maximum_short_squeeze_ratio: uint16,
  core_exchange_rate: price
});

export var asset_publish_feed = new Serializer("asset_publish_feed", {
  fee: asset,
  publisher: protocol_id_type("account"),
  asset_id: protocol_id_type("asset"),
  feed: price_feed,
  extensions: set(future_extensions)
});

export var witness_create = new Serializer("witness_create", {
  fee: asset,
  witness_account: protocol_id_type("account"),
  url: string,
  memo: string,
  block_signing_key: public_key
});

export var witness_update = new Serializer("witness_update", {
  fee: asset,
  witness: protocol_id_type("witness"),
  witness_account: protocol_id_type("account"),
  new_url: optional(string),
  new_memo: optional(string),
  new_signing_key: optional(public_key)
});

export var op_wrapper = new Serializer("op_wrapper", {op: operation});

export var proposal_create = new Serializer("proposal_create", {
  fee: asset,
  fee_paying_account: protocol_id_type("account"),
  expiration_time: time_point_sec,
  proposed_ops: array(op_wrapper),
  review_period_seconds: optional(uint32),
  memo: optional(string),
  extensions: set(future_extensions)
});

export var proposal_update = new Serializer("proposal_update", {
  fee: asset,
  fee_paying_account: protocol_id_type("account"),
  proposal: protocol_id_type("proposal"),
  active_approvals_to_add: set(protocol_id_type("account")),
  active_approvals_to_remove: set(protocol_id_type("account")),
  owner_approvals_to_add: set(protocol_id_type("account")),
  owner_approvals_to_remove: set(protocol_id_type("account")),
  key_approvals_to_add: set(public_key),
  key_approvals_to_remove: set(public_key),
  extensions: set(future_extensions)
});

export var proposal_delete = new Serializer("proposal_delete", {
  fee: asset,
  fee_paying_account: protocol_id_type("account"),
  using_owner_authority: bool,
  proposal: protocol_id_type("proposal"),
  extensions: set(future_extensions)
});

export var withdraw_permission_create_old = new Serializer(
  "withdraw_permission_create",
  {
    fee: asset,
    withdraw_from_account: protocol_id_type("account"),
    authorized_account: protocol_id_type("account"),
    withdrawal_limit: asset,
    withdrawal_period_sec: uint32,
    periods_until_expiration: uint32,
    period_start_time: time_point_sec
  }
);

export var withdraw_permission_create = new Serializer(
  "withdraw_permission_create",
  {
    fee: asset,
    withdraw_from_account: protocol_id_type("account"),
    authorized_account: protocol_id_type("account"),
    withdrawal_limit: asset,
    withdrawal_period_sec: uint32,
    periods_until_expiration: uint32,
    period_start_time: time_point_sec,
    authorized_identify: uint32
  }
);

export var withdraw_permission_update = new Serializer(
  "withdraw_permission_update",
  {
    fee: asset,
    withdraw_from_account: protocol_id_type("account"),
    authorized_account: protocol_id_type("account"),
    permission_to_update: protocol_id_type("withdraw_permission"),
    withdrawal_limit: asset,
    withdrawal_period_sec: uint32,
    period_start_time: time_point_sec,
    periods_until_expiration: uint32
  }
);

export var withdraw_permission_claim = new Serializer(
  "withdraw_permission_claim",
  {
    fee: asset,
    withdraw_permission: protocol_id_type("withdraw_permission"),
    withdraw_from_account: protocol_id_type("account"),
    withdraw_to_account: protocol_id_type("account"),
    amount_to_withdraw: asset,
    memo: optional(memo_data)
  }
);

export var withdraw_permission_delete = new Serializer(
  "withdraw_permission_delete",
  {
    fee: asset,
    withdraw_from_account: protocol_id_type("account"),
    authorized_account: protocol_id_type("account"),
    withdrawal_permission: protocol_id_type("withdraw_permission")
  }
);

export var committee_member_create = new Serializer("committee_member_create", {
  fee: asset,
  committee_member_account: protocol_id_type("account"),
  url: string,
  memo: string
});

export var committee_member_update = new Serializer("committee_member_update", {
  fee: asset,
  committee_member: protocol_id_type("committee_member"),
  committee_member_account: protocol_id_type("account"),
  new_url: optional(string),
  new_memo: optional(string)
});

export var chain_parameters = new Serializer("chain_parameters", {
  current_fees: fee_schedule,
  block_interval: uint8,
  maintenance_interval: uint32,
  maintenance_skip_slots: uint8,
  committee_proposal_review_period: uint32,
  maximum_transaction_size: uint32,
  maximum_block_size: uint32,
  maximum_time_until_expiration: uint32,
  maximum_proposal_lifetime: uint32,
  maximum_asset_whitelist_authorities: uint8,
  maximum_asset_feed_publishers: uint8,
  maximum_witness_count: uint16,
  maximum_committee_count: uint16,
  maximum_authority_membership: uint16,
  reserve_percent_of_fee: uint16,
  network_percent_of_fee: uint16,
  lifetime_referrer_percent_of_fee: uint16,
  cashback_vesting_period_seconds: uint32,
  cashback_vesting_threshold: int64,
  count_non_member_votes: bool,
  allow_non_member_whitelists: bool,
  witness_pay_per_block: int64,
  worker_budget_per_day: int64,
  max_predicate_opcode: uint16,
  fee_liquidation_threshold: int64,
  accounts_per_fee_scale: uint16,
  account_fee_scale_bitshifts: uint8,
  max_authority_depth: uint8,
  extensions: set(future_extensions)
});

export var committee_member_update_global_parameters = new Serializer(
  "committee_member_update_global_parameters",
  {
    fee: asset,
    new_parameters: chain_parameters
  }
);

export var linear_vesting_policy_initializer = new Serializer(
  "linear_vesting_policy_initializer",
  {
    begin_timestamp: time_point_sec,
    vesting_cliff_seconds: uint32,
    vesting_duration_seconds: uint32
  }
);

export var cdd_vesting_policy_initializer = new Serializer(
  "cdd_vesting_policy_initializer",
  {
    start_claim: time_point_sec,
    vesting_seconds: uint32
  }
);

var vesting_policy_initializer = static_variant([
  linear_vesting_policy_initializer,
  cdd_vesting_policy_initializer
]);

export var vesting_balance_create = new Serializer("vesting_balance_create", {
  fee: asset,
  creator: protocol_id_type("account"),
  owner: protocol_id_type("account"),
  amount: asset,
  policy: vesting_policy_initializer
});

export var vesting_balance_withdraw = new Serializer(
  "vesting_balance_withdraw",
  {
    fee: asset,
    vesting_balance: protocol_id_type("vesting_balance"),
    owner: protocol_id_type("account"),
    amount: asset
  }
);

export var refund_worker_initializer = new Serializer(
  "refund_worker_initializer"
);

export var vesting_balance_worker_initializer = new Serializer(
  "vesting_balance_worker_initializer",
  {pay_vesting_period_days: uint16}
);

export var burn_worker_initializer = new Serializer("burn_worker_initializer");


export var exchange_worker_initializer = new Serializer("exchange_worker_initializer", {});

var worker_initializer = static_variant([
  refund_worker_initializer,
  vesting_balance_worker_initializer,
  burn_worker_initializer,
  exchange_worker_initializer
]);

export var worker_create = new Serializer("worker_create", {
  fee: asset,
  owner: protocol_id_type("account"),
  work_begin_date: time_point_sec,
  work_end_date: time_point_sec,
  daily_pay: int64,
  name: string,
  url: string,
  memo: string,
  initializer: worker_initializer
});

export var custom = new Serializer("custom", {
  fee: asset,
  payer: protocol_id_type("account"),
  required_auths: set(protocol_id_type("account")),
  id: uint16,
  data: bytes()
});

export var account_name_eq_lit_predicate = new Serializer(
  "account_name_eq_lit_predicate",
  {
    account_id: protocol_id_type("account"),
    name: string
  }
);

export var asset_symbol_eq_lit_predicate = new Serializer(
  "asset_symbol_eq_lit_predicate",
  {
    asset_id: protocol_id_type("asset"),
    symbol: string
  }
);

export var block_id_predicate = new Serializer("block_id_predicate", {
  id: bytes(20)
});

var predicate = static_variant([
  account_name_eq_lit_predicate,
  asset_symbol_eq_lit_predicate,
  block_id_predicate
]);

export var assert = new Serializer("assert", {
  fee: asset,
  fee_paying_account: protocol_id_type("account"),
  predicates: array(predicate),
  required_auths: set(protocol_id_type("account")),
  extensions: set(future_extensions)
});

export var balance_claim = new Serializer("balance_claim", {
  fee: asset,
  deposit_to_account: protocol_id_type("account"),
  balance_to_claim: protocol_id_type("balance"),
  balance_owner_key: public_key,
  total_claimed: asset
});

export var override_transfer = new Serializer("override_transfer", {
  fee: asset,
  issuer: protocol_id_type("account"),
  from: protocol_id_type("account"),
  to: protocol_id_type("account"),
  amount: asset,
  memo: optional(memo_data),
  extensions: set(future_extensions)
});

export var stealth_confirmation = new Serializer("stealth_confirmation", {
  one_time_key: public_key,
  to: optional(public_key),
  encrypted_memo: bytes()
});

export var blind_output = new Serializer("blind_output", {
  commitment: bytes(33),
  range_proof: bytes(),
  owner: authority,
  stealth_memo: optional(stealth_confirmation)
});

export var transfer_to_blind = new Serializer("transfer_to_blind", {
  fee: asset,
  amount: asset,
  from: protocol_id_type("account"),
  blinding_factor: bytes(32),
  outputs: array(blind_output)
});

export var blind_input = new Serializer("blind_input", {
  commitment: bytes(33),
  owner: authority
});

export var blind_transfer = new Serializer("blind_transfer", {
  fee: asset,
  inputs: array(blind_input),
  outputs: array(blind_output)
});

export var transfer_from_blind = new Serializer("transfer_from_blind", {
  fee: asset,
  amount: asset,
  to: protocol_id_type("account"),
  blinding_factor: bytes(32),
  inputs: array(blind_input)
});

export var asset_settle_cancel = new Serializer("asset_settle_cancel", {
  fee: asset,
  settlement: protocol_id_type("force_settlement"),
  account: protocol_id_type("account"),
  amount: asset,
  extensions: set(future_extensions)
});

export var asset_claim_fees = new Serializer("asset_claim_fees", {
  fee: asset,
  issuer: protocol_id_type("account"),
  amount_to_claim: asset,
  extensions: set(future_extensions)
});

export var bitlender_lend_order = new Serializer("bitlender_lend_order", { fee: asset,
  issuer: protocol_id_type("account"),
  carrier: protocol_id_type("account"),
  order: string,
  amount_to_loan: asset,
  loan_period: uint32,
  interest_rate: uint32,
  repayment_type: uint32,
  amount_to_collateralize: asset,
  collateral_rate: uint32,
  bid_period: uint32,
  memo: optional(string),
  extensions: set(future_extensions) });

export var bitlender_add_collateral = new Serializer("bitlender_add_collateral", { fee: asset,
  issuer: protocol_id_type("account"),
  order_id: protocol_id_type("bitlender_order"),
  collateral: asset,
  collateral_rate: uint32,
  extensions: set(future_extensions) });

export var bitlender_invest = new Serializer("bitlender_invest", { fee: asset,
  issuer: protocol_id_type("account"),
  loan_id: protocol_id_type("account"),
  carrier: protocol_id_type("account"),
  order_id: protocol_id_type("bitlender_order"),
  amount_to_invest: asset,
  extensions: set(future_extensions) });

export var gateway_withdraw = new Serializer("gateway_withdraw", { fee: asset,
  from: protocol_id_type("account"),
  to: protocol_id_type("account"),
  withdraw: asset,
  extensions: set(future_extensions) });

export var gateway_deposit = new Serializer("gateway_deposit", { fee: asset,
  from: protocol_id_type("account"),
  to: protocol_id_type("account"),
  deposit: asset,
  extensions: set(future_extensions)  });

export var bitlender_repay_interest = new Serializer("bitlender_repay_interest", { fee: asset,
  issuer: protocol_id_type("account"),
  order_id: protocol_id_type("bitlender_order"),
  repay_period: uint32,
  extensions: set(future_extensions)  });

export var bitlender_overdue_interest = new Serializer("bitlender_overdue_interest", { fee: asset,
  issuer: protocol_id_type("account"),
  order_id: protocol_id_type("bitlender_order"),
  repay_period: uint32,
  extensions: set(future_extensions)  });

export var bitlender_recycle_interest = new Serializer("bitlender_recycle_interest", { fee: asset,
  issuer: protocol_id_type("account"),
  order_id: protocol_id_type("bitlender_order"),
  repay_period: uint32,
  memo: optional(string),
  extensions: set(future_extensions)  });

export var account_config_operation = new Serializer("account_config_operation", { fee: asset,
  issuer: protocol_id_type("account"),
  config: map(string, string),
  op_type: uint32,
  extensions: set(future_extensions)  });

export var bitlender_repay_principal = new Serializer("bitlender_repay_principal", { fee: asset,
  issuer: protocol_id_type("account"),
  order_id: protocol_id_type("bitlender_order"),
  extensions: set(future_extensions)  });

export var bitlender_prepayment = new Serializer("bitlender_prepayment", { fee: asset,
  issuer: protocol_id_type("account"),
  order_id: protocol_id_type("bitlender_order"),
  extensions: set(future_extensions)  });

export var bitlender_overdue_repay = new Serializer("bitlender_overdue_repay", { fee: asset,
  issuer: protocol_id_type("account"),
  order_id: protocol_id_type("bitlender_order"),
  extensions: set(future_extensions)  });

//share_type: uint64
export var bitlender_recycle = new Serializer("bitlender_recycle", { fee: asset,
  issuer: protocol_id_type("account"),
  order_id: protocol_id_type("bitlender_order"),
  asset_pay: uint64,
  memo: optional(string),
  extensions: set(future_extensions)  });

export var bitlender_setautorepayer = new Serializer("bitlender_setautorepayer", { fee: asset,
  issuer: protocol_id_type("account"),
  order_id: protocol_id_type("bitlender_order"),
  bset: bool,
  extensions: set(future_extensions)  });

  bitlender_remove_operation

export var fill_loan = new Serializer("fill_loan", { fee: asset,
  issuer: protocol_id_type("account"),
  order_id: protocol_id_type("bitlender_order"),
  extensions: set(future_extensions)  });

export var fundraise_option = new Serializer("fundraise_option", {
  period: uint32,
  feed_publiser: protocol_id_type("account"),
  max_supply: uint64,
  min_fundraise: uint64,
  max_fundraise: uint64,
  step_fundraise: uint64,
  start_time: time_point_sec,
  end_time: time_point_sec,
  fundraise_price: price,
  overdue_time: uint32,
  time_zone: uint32,
  extensions: set(future_extensions)
});

export var finance_option_create = new Serializer("finance_option_create", { fee: asset,
  issuer: protocol_id_type("account"),
  need_auth: uint32,
  trust_auth: optional(set(protocol_id_type("account"))),
  issue_asset_id: protocol_id_type("asset"),
  issue_asset_owner: protocol_id_type("account"),
  buy_asset_id: protocol_id_type("asset"),
  fundraise_owner: protocol_id_type("account"),
  options: fundraise_option,
  url: string,
  extensions: set(future_extensions)  });

export var finance_option_update = new Serializer("finance_option_update", { fee: asset,
  issuer: protocol_id_type("account"),
  need_auth: optional(uint32),
  trust_auth: optional(set(protocol_id_type("account"))),
  fundraise_id: protocol_id_type("issue_fundraise"),
  issue_asset_owner: protocol_id_type("account"),
  period: uint32,
  options: optional(fundraise_option),
  url: optional(string),
  op_type: uint32,
  extensions: set(future_extensions)  });

export var buy_finance_create = new Serializer("buy_finance_create", { fee: asset,
  issuer: protocol_id_type("account"),
  fundraise_id: protocol_id_type("issue_fundraise"),
  period: uint32,
  amount: asset,
  bimmediately: uint32,
  memo: optional(memo_data),
  extensions: set(future_extensions)  });

export var buy_finance_enable = new Serializer("buy_finance_enable", { fee: asset,
  issuer: protocol_id_type("account"),
  fundraise_id: protocol_id_type("issue_fundraise"),
  benable: uint32,
  extensions: set(future_extensions)  });

export var finance_disable = new Serializer("finance_disable", { fee: asset,
  issuer: protocol_id_type("account"),
  order_id: protocol_id_type("bitlender_order") });

export var account_coupon = new Serializer("account_coupon", { fee: asset,
  issuer: protocol_id_type("account"),
  extensions: set(future_extensions)  });

export var change_identity = new Serializer("change_identity", { fee: asset,
  issuer: protocol_id_type("account"),
  object_id: object_id_type,
  enable: bool });

export var bitlender_option = new Serializer("bitlender_option", {
  issuer_rate: protocol_id_type("account"),   //修改利率人
  max_repayment_period: uint32, //最大借款期限
  repayment_period_uint: uint32,  //期限单位 1 月 2  年
  max_bid_time: uint32,  //最大投标期限
  max_overdue_period: uint32,  //最大利息逾期期数，超过这个期数，就是本金逾期了
  notify_overdue_time: uint32,  //逾期提醒时间
  overdue_expiration_time: uint32,  //逾期时间
  repayment_type: uint32,  //还款方式
  repayment_date: uint32,  //还款日期
  min_invest_amount: int64,  //最小投资金额
  min_loan_amount: int64,  //最小借款金额
  min_invest_increase_range: int64,  //最小投资增加额
  min_loan_increase_range: int64,  //最小借款增加额
  max_repayment_rate: uint32,  //最大利率
  max_interest_rate: int64,  //利息封顶值

  risk_margin_rate: uint32,      //风险准备金率(基数1000)
  max_risk_margin: int64,  //风险准备金封顶

  carrier_service_charge_rate: uint32,    //运营商服务费费率(基数1000)
  max_carrier_service_charge: int64, //运营商服务费封顶
  carrier_service_loan_carrier: uint32,    //借方运营商 (基数100)
  carrier_service_invest_carrier: uint32,    //投资方运营商

  platform_service_charge_rate: uint32,    //平台服务费费率(基数1000)
  max_platform_service_charge_rate: int64, //平台服务费封顶

  platform_service_loan_carrier: uint32,  //借方运营商 (基数100)
  platform_service_invest_carrier: uint32,  //投资方运营商
  platform_service_loan_refer: uint32,  //借方推荐人
  platform_service_invest_refer: uint32,  //投资方推荐人
  platform_service_gateway: uint32,   //网关
  platform_service_platform: uint32,  //平台

  overdue_liquidation_rate: uint32,  //本金逾期违约金率(基数100)
  overdue_penalty_interest_rate: uint32,  //利息逾期违约金率(基数100)
  early_repayment_liquidation_rate: uint32,  //提前还款违约金率(基数100)
  overdue_penalty_date_interest_rate: uint32,  //利息逾期按天违约金率(基数10000)
  principal_guarantee_rate: uint32,   //投资者保本率
  platform_id: protocol_id_type("account"),  //平台
  carriers: set(protocol_id_type("account")),  //运营商
  allowed_collateralize: set(protocol_id_type("asset")), //允许抵押的币种
  ahead_autopay_time: uint32,
  time_zone: uint32,   //时区
  extensions: set(future_extensions)
});

export var bitlender_option_update = new Serializer("bitlender_option_update", { fee: asset,
  issuer: protocol_id_type("account"),
  option_id: protocol_id_type("bitlender_option"),
  author: protocol_id_type("account"),
  options: bitlender_option,
  extensions: set(future_extensions) });

export var bitlender_rate = new Serializer("bitlender_rate", {
  interest_rate: uint32
});

export var bitlender_rate_update = new Serializer("bitlender_rate_update", { fee: asset,
  issuer: protocol_id_type("account"),
  option_id: protocol_id_type("bitlender_option"),
  interest_rate_add: map(uint32, bitlender_rate),
  interest_rate_remove: array(uint32),
  extensions: set(future_extensions)  });

export var budget_member_create = new Serializer("budget_member_create", { fee: asset,
  budget_member_account: protocol_id_type("account"),
  url: string,
  memo: string });

export var budget_member_update = new Serializer("budget_member_update", { fee: asset,
  budget_member: protocol_id_type("budget_member"),
  budget_member_account: protocol_id_type("account"),
  new_url: optional(string),
  new_memo: optional(string),
  votes: optional(set(vote_id)) });

export var transfer_vesting_operation = new Serializer("transfer_vesting_operation", { fee: asset,
  from: protocol_id_type("account"),
  to: protocol_id_type("account"),
  amount: asset,
  vesting_cliff_seconds: uint32,
  vesting_duration_seconds: uint32,
  memo: optional(memo_data),
  extensions: set(future_extensions) });

export var revoke_vesting_operation = new Serializer("revoke_vesting_operation", { fee: asset,
  issuer: protocol_id_type("account"),
  vesting_id: protocol_id_type("vesting_balance"),
  extensions: set(future_extensions) });

export var bitlender_remove_operation = new Serializer("bitlender_remove_operation", { fee: asset,
  issuer: protocol_id_type("account"),
  order_id: protocol_id_type("bitlender_order"),
  extensions: set(future_extensions) });

export var bitlender_squeeze_operation = new Serializer("bitlender_squeeze_operation", { fee: asset,
  issuer: protocol_id_type("account"),
  order_id: protocol_id_type("bitlender_order"),
  squeeze_state: bool });

export var bitlender_publish_feed_operation = new Serializer("bitlender_publish_feed_operation", { fee: asset,
  publisher: protocol_id_type("account"),
  feed: price_feed,
  extensions: set(future_extensions)
  });

export var bitlender_feed_option = new Serializer("bitlender_feed_option", {
  flags: uint32,
  feed_lifetime_sec: uint32,
  minimum_feeds: uint8,
  force_settlement_delay_sec: uint32,
  force_settlement_offset_percent: uint16,
  maximum_force_settlement_volume: uint16,
  feeders: set(protocol_id_type("account"))
  })

export var bitlender_update_feed_producers_operation = new Serializer("bitlender_update_feed_producers_operation", { fee: asset,
  issuer: protocol_id_type("account"),
  option_id: protocol_id_type("bitlender_option"),
  author: protocol_id_type("account"),
  new_feed_option: bitlender_feed_option,
  extensions: set(future_extensions)  });

export var bitlender_test_operation = new Serializer("bitlender_test_operation", { fee: asset,
  extensions: set(future_extensions)  });

export var account_lock_balances = new Serializer("account_lock_balances", { fee: asset,
  account_id: protocol_id_type("account"),
  lock: bool,
  extensions: set(future_extensions)  });

export var gateway_issue_currency = new Serializer("gateway_issue_currency", { fee: asset,
  issuer: protocol_id_type("account"),
  account_to: protocol_id_type("account"),
  issue_currency: asset,
  revoke: bool,
  memo: optional(memo_data),
  extensions: set(future_extensions)  });

export var bitlender_option_author = new Serializer("bitlender_option_author", { fee: asset,
  issuer: protocol_id_type("account"),
  option_id: protocol_id_type("bitlender_option"),
  authors: set(protocol_id_type("account")),
  weight_threshold: uint32,
  extensions: set(future_extensions) });


export var gateway_update = new Serializer("gateway_update", { fee: asset,
  gateway: protocol_id_type("gateway"),
  gateway_account: protocol_id_type("account"),
  need_auth: optional(uint32),
  new_url: optional(string),
  new_memo: optional(string),
  allowed_asset: optional(set(protocol_id_type("asset"))) });

export var carrier_update = new Serializer("carrier_update", { fee: asset,
  carrier: protocol_id_type("carrier"),
  carrier_account: protocol_id_type("account"),
  need_auth: optional(uint32),
  new_url: optional(string),
  new_memo: optional(string),
  new_config: optional(string)  });

export var bitlender_option_create = new Serializer("bitlender_option_create", { fee: asset,
  asset_id: protocol_id_type("asset"),
  issuer: protocol_id_type("account"),
  sproduct: string,
  options: bitlender_option,
  fee_mode: uint32,
  extensions: set(future_extensions) });

export var asset_property = new Serializer("asset_property", { fee: asset,
  issuer: protocol_id_type("account"),
  asset_id: protocol_id_type("asset"),
  uasset_property: uint32,
  uasset_mask: uint32,
  extensions: set(future_extensions) });

export var bitlender_option_stop = new Serializer("bitlender_option_stop", { fee: asset,
  issuer: protocol_id_type("account"),
  option_id: protocol_id_type("bitlender_option"),
  author: protocol_id_type("account"),
  stop: bool,
  extensions: set(future_extensions) });

export var issue_fundraise_publish_feed = new Serializer("issue_fundraise_publish_feed", { fee: asset,
  issuer: protocol_id_type("account"),
  fundraise_id: protocol_id_type("issue_fundraise"),
  period: uint32,
  feed_publiser: protocol_id_type("account"),
  fundraise_price: price,
  extensions: set(future_extensions) });

export var finance_paramers = new Serializer("finance_paramers", {
  fundraise_fees_rate: uint32,
  fundraise_fees_distribution: uint32
});

export var finance_paramers_update = new Serializer("finance_paramers_update", { fee: asset,
  issuer: protocol_id_type("account"),
  options: finance_paramers,
  extensions: set(future_extensions) });

export var exchange_feed_type = new Serializer("exchange_feed_type", {
  total_burned: uint64  });

export var exchange_bancor_type = new Serializer("exchange_bancor_type", {
  total_burned: uint64,
  balance : protocol_id_type("vesting_balance")  });

export var exchange_market_type = new Serializer("exchange_market_type", {
  total_burned: uint64  });

var exchange_type = static_variant([
  exchange_feed_type,
  exchange_bancor_type,
  exchange_market_type
]);

export var sell_exchange_create = new Serializer("sell_exchange_create", { fee: asset,
  issuer: protocol_id_type("account"),
  sell: asset,
  buy: asset,
  url: string,
  initializer: exchange_type,
  extensions: set(future_extensions) });

export var sell_exchange_update = new Serializer("sell_exchange_update", { fee: asset,
  issuer: protocol_id_type("account"),
  extensions: set(future_extensions) });

export var sell_exchange_remove = new Serializer("sell_exchange_remove", { fee: asset,
  issuer: protocol_id_type("account"),
  extensions: set(future_extensions) });

export var buy_exchange_create = new Serializer("buy_exchange_create", { fee: asset,
  issuer: protocol_id_type("account"),
  extensions: set(future_extensions) });

export var buy_exchange_update = new Serializer("buy_exchange_update", { fee: asset,
  issuer: protocol_id_type("account"),
  extensions: set(future_extensions) });

export var buy_exchange_remove = new Serializer("buy_exchange_remove", { fee: asset,
  issuer: protocol_id_type("account"),
  extensions: set(future_extensions) });

export var issue_fundraise_remove = new Serializer("issue_fundraise_remove", { fee: asset,
  issuer: protocol_id_type("account"),
  fundraise_id: protocol_id_type("issue_fundraise"),
  issue_asset_owner: protocol_id_type("account"),
  extensions: set(future_extensions) });

export var account_auth = new Serializer("account_auth", {
  authenticator: optional(protocol_id_type("account")),
  info: optional(memo_data),
  key: optional(memo_data)
})

export var account_author = new Serializer("account_author", {
  state: uint32,
  expiration: uint32,
  account: protocol_id_type("account"),
  hash64: uint64
})

export var account_authenticate = new Serializer("account_authenticate", { fee: asset,
    issuer: protocol_id_type("account"),
    op_type: uint32,
    auth_flag: optional(bool),
    lock_balance: optional(bool),
    auth_key: optional(public_key),
    auth_account: optional(account_author),
    auth_data: optional(account_auth),
    flags: optional(uint32),
    need_auth: optional(uint32),
    trust_auth: optional(map(protocol_id_type("asset"), protocol_id_type("account"))),
    extensions: set(future_extensions) });

export var bitlender_option_fee_mode = new Serializer("bitlender_option_fee_mode", { fee: asset,
  issuer: protocol_id_type("account"),
  option_id: protocol_id_type("bitlender_option"),
  fee_mode: uint32,
  extensions: set(future_extensions) });

//以下函数是暂时不用,占个位置
export var fba_distribute = new Serializer("fba_distribute", { fee: asset,
  extensions: set(future_extensions) });

export var bid_collateral = new Serializer("bid_collateral", { fee: asset,
  extensions: set(future_extensions) });

export var execute_bid = new Serializer("execute_bid", { fee: asset,
  extensions: set(future_extensions) });

export var account_property = new Serializer("account_property", { fee: asset,
  extensions: set(future_extensions) });

export var bitlender_autorepayment = new Serializer("bitlender_autorepayment", { fee: asset,
  extensions: set(future_extensions) });


export var author_create = new Serializer("author_create", { fee: asset,
    author_account: protocol_id_type("account"),
    auth_type: uint32,
    allow_asset: array(protocol_id_type("asset")),
    url: string,
    memo: string,
    config: optional(string),
});

export var author_update = new Serializer("author_update", { fee: asset,
    author: protocol_id_type("author"),
    author_account: protocol_id_type("account"),
    auth_type: optional(uint32),
    new_url: optional(string),
    new_memo: optional(string),
    new_config: optional(string),
    new_allow_asset: optional(array(protocol_id_type("asset")))});

export var account_withdraw_fee = new Serializer("account_withdraw_fee", { fee: asset,
  issuer: protocol_id_type("account"),
  core_amount: uint64,
  withdraw_asset_id: protocol_id_type("asset"),
  extensions: set(future_extensions) });

export var no_use_1 = new Serializer("no_use_1", { fee: asset,
  extensions: set(future_extensions) });

// export var gateway_create = new Serializer("gateway_create", { fee: asset,
//   extensions: set(future_extensions) });

export var gateway_create = new Serializer("gateway_create", {
  fee: asset,
  gateway_account: protocol_id_type("account"),
  need_auth: uint32,
  url: string,
  memo: string,
  allowed_asset: set(protocol_id_type("asset"))
});

// export var carrier_create = new Serializer("carrier_create", { fee: asset,
//   extensions: set(future_extensions) });

export var carrier_create = new Serializer("carrier_create", {
  fee: asset,
  carrier_account: protocol_id_type("account"),
  need_auth: uint32,
  url: string,
  memo: string,
  config: optional(string),
});


export var asset_update_gateway = new Serializer("asset_update_gateway", { fee: asset,
  issuer: protocol_id_type("account"),
  config: map(string, string),
  op_type: uint32,
  extensions: set(future_extensions)  });

export var committee_member_update_zos_parameters = new Serializer("committee_member_update_zos_parameters", { fee: asset,
  issuer: protocol_id_type("account"),
  config: map(string, string),
  op_type: uint32,
  extensions: set(future_extensions)  });

export var locktoken_create = new Serializer("locktoken_create", { fee: asset,
  issuer: protocol_id_type("account"),
  locked: asset,
  to: protocol_id_type("account"),
  period: uint32,
  type: uint32,
  autolock: uint32, 
  extensions: set(future_extensions)  });

export var locktoken_update = new Serializer("locktoken_update", { fee: asset,
  issuer: protocol_id_type("account"),
  locktoken_id: protocol_id_type("locktoken"),
  op_type: uint32,
  locked: optional(asset),
  to: optional(protocol_id_type("account")),
  type: optional(uint32),
  period: optional(uint32),  
  autolock: optional(uint32), 
  extensions: set(future_extensions)  });  

export var locktoken_remove = new Serializer("locktoken_remove", { fee: asset,
  issuer: protocol_id_type("account"),
  locktoken_id: protocol_id_type("locktoken"),
  extensions: set(future_extensions)  });
  
  export var locktoken_node = new Serializer("locktoken_node", {
    fee: asset,
    issuer: protocol_id_type("account"),
    locktoken_id: protocol_id_type("locktoken"),
    op_type: uint32,
    to: protocol_id_type("account"),
    to_amount: asset,
    period: uint32,
    extensions: set(future_extensions)
});
export var asset_locktoken = new Serializer("asset_locktoken", {
    fee: asset,
    issuer: protocol_id_type("account"),
    asset_lock: protocol_id_type("asset"), 
    op_type: uint32,
    sParam: string, 
    extensions: set(future_extensions)
});
  
operation.st_operations = [
  transfer,
  limit_order_create,
  limit_order_cancel,
  call_order_update,
  fill_order,
  account_create,
  account_update,
  account_whitelist,
  account_upgrade,
  account_transfer,
  asset_create,
  asset_update,
  asset_update_bitasset,
  asset_update_feed_producers,
  asset_issue,
  asset_reserve,
  asset_fund_fee_pool,
  asset_settle,
  asset_global_settle,
  asset_publish_feed,
  witness_create,
  witness_update,
  proposal_create,
  proposal_update,
  proposal_delete,
  withdraw_permission_create,
  withdraw_permission_update,
  withdraw_permission_claim,
  withdraw_permission_delete,
  committee_member_create,
  committee_member_update,
  committee_member_update_global_parameters,
  vesting_balance_create,
  vesting_balance_withdraw,
  worker_create,
  custom,
  assert,
  balance_claim,
  override_transfer,
  transfer_to_blind,
  blind_transfer,
  transfer_from_blind,
  asset_settle_cancel,
  asset_claim_fees,

  fba_distribute,
  bid_collateral,
  execute_bid,

  account_property,
  gateway_withdraw,       //提币
  gateway_deposit,        //充值
  gateway_issue_currency,   //给网关发行货币
  bitlender_option_create,  //创建法币参数
  bitlender_option_author,  //创建法币董事会
  bitlender_option_update,  //修改法币参数
  bitlender_rate_update,    //修改法币率利
  asset_property,           //赋权资产为法币或可抵押数字货币

  bitlender_lend_order,   //创建借款订单
  bitlender_invest,     //投资订单
  bitlender_repay_interest,     //还息
  bitlender_overdue_interest,   //逾期还息
  bitlender_repay_principal,    //还本
  bitlender_prepayment,         //提前还款
  bitlender_overdue_repay,      //逾期还款
  bitlender_add_collateral,      //添加抵押
  bitlender_recycle,             //处理不良资产

    
  bitlender_setautorepayer,    //自动还款账户
  fill_loan,                 // VIRTUAL
  finance_option_create,  //创建筹资参数
  finance_option_update,  //修改筹资参数
  buy_finance_create,         //筹资
  buy_finance_enable,         //筹资有效
  account_coupon,         //增加优惠卷
  change_identity,         //激活见证人
  bitlender_autorepayment,   //自动还款
  account_withdraw_fee,   //提取费用
  no_use_1,               //无用
  gateway_create,           //
  gateway_update,
  carrier_create,
  carrier_update,
  budget_member_create,
  budget_member_update,
  transfer_vesting_operation,
  revoke_vesting_operation,
  bitlender_remove_operation,
  bitlender_squeeze_operation,
  bitlender_publish_feed_operation,
  bitlender_update_feed_producers_operation,
  bitlender_test_operation,
  bitlender_option_stop,    //借贷停运
  issue_fundraise_publish_feed,   //众筹喂价
  finance_paramers_update,      //众筹系统参数
  sell_exchange_create,       //发布兑换
  sell_exchange_update,      //更新兑换
  sell_exchange_remove,      //删除兑换
  buy_exchange_create,      //发布购买
  buy_exchange_update,     //更新购买
  buy_exchange_remove,     //删除购买
  issue_fundraise_remove,   //删除筹资
  bitlender_option_fee_mode,
  account_authenticate,     //认证信息
  author_create,     //101 创建认证人
  author_update,      //102 更新认证人
  bitlender_recycle_interest,  //103 利息逾期
  account_config_operation,      //104 用户配置
  asset_update_gateway,   //105 更新资产网关     
  committee_member_update_zos_parameters,   //106 修改ZOS系统参数     
  locktoken_create,   //107 创建锁仓
  locktoken_update,   //108 修改锁仓
  locktoken_remove,   //109  取消锁仓  
  locktoken_node,   //110 收益锁仓
  asset_locktoken   //111 锁仓参数
];

export var transaction = new Serializer("transaction", {
  ref_block_num: uint16,
  ref_block_prefix: uint32,
  expiration: time_point_sec,
  operations: array(operation),
  extensions: set(future_extensions)
});

export var signed_transaction = new Serializer("signed_transaction", {
  ref_block_num: uint16,
  ref_block_prefix: uint32,
  expiration: time_point_sec,
  operations: array(operation),
  extensions: set(future_extensions),
  signatures: array(bytes(65))
});
//# -------------------------------
//#  Generated code end
//# -------------------------------

// Custom Types

export var stealth_memo_data = new Serializer("stealth_memo_data", {
  from: optional(public_key),
  amount: asset,
  blinding_factor: bytes(32),
  commitment: bytes(33),
  check: uint32
});
// var stealth_confirmation = new Serializer(
//     "stealth_confirmation", {
//     one_time_key: public_key,
//     to: optional( public_key ),
//     encrypted_memo: stealth_memo_data
// })
