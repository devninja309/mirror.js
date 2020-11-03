"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MirrorFactory = void 0;
var terra_js_1 = require("@terra-money/terra.js");
var ContractClient_1 = require("./ContractClient");
var MirrorFactory = /** @class */ (function (_super) {
    __extends(MirrorFactory, _super);
    function MirrorFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MirrorFactory.prototype.init = function (init_msg, migratable) {
        return this.createInstantiateMsg(init_msg, {}, migratable);
    };
    MirrorFactory.prototype.postInitialize = function (owner, terraswap_factory, mirror_token, staking_contract, oracle_contract, mint_contract, commission_collector) {
        return this.createExecuteMsg({
            post_initialize: {
                owner: owner,
                terraswap_factory: terraswap_factory,
                mirror_token: mirror_token,
                staking_contract: staking_contract,
                oracle_contract: oracle_contract,
                mint_contract: mint_contract,
                commission_collector: commission_collector
            }
        });
    };
    MirrorFactory.prototype.updateWeight = function (asset_token, weight) {
        return this.createExecuteMsg({
            update_weight: {
                asset_token: asset_token,
                weight: weight.toFixed()
            }
        });
    };
    MirrorFactory.prototype.updateConfig = function (config) {
        return this.createExecuteMsg({
            update_config: config
        });
    };
    MirrorFactory.prototype.terraswapCreationHook = function (asset_token) {
        return this.createExecuteMsg({
            terraswap_creation_hook: {
                asset_token: asset_token
            }
        });
    };
    MirrorFactory.prototype.whitelist = function (name, symbol, oracle_feeder, params) {
        return this.createExecuteMsg({
            whitelist: {
                name: name,
                symbol: symbol,
                oracle_feeder: oracle_feeder,
                params: {
                    weight: new terra_js_1.Dec(params.weight).toFixed(),
                    lp_commission: new terra_js_1.Dec(params.lp_commission).toFixed(),
                    owner_commission: new terra_js_1.Dec(params.owner_commission).toFixed(),
                    auction_discount: new terra_js_1.Dec(params.auction_discount).toFixed(),
                    min_collateral_ratio: new terra_js_1.Dec(params.min_collateral_ratio).toFixed()
                }
            }
        });
    };
    MirrorFactory.prototype.migrateAsset = function (name, symbol, from_token, end_price) {
        return this.createExecuteMsg({
            migrate_asset: {
                name: name,
                symbol: symbol,
                from_token: from_token,
                end_price: new terra_js_1.Dec(end_price).toString()
            }
        });
    };
    MirrorFactory.prototype.passCommand = function (contract_addr, msg) {
        return this.createExecuteMsg({
            pass_command: {
                contract_addr: contract_addr,
                msg: Buffer.from(JSON.stringify(msg)).toString('base64')
            }
        });
    };
    MirrorFactory.prototype.mint = function (asset_token) {
        return this.createExecuteMsg({
            mint: {
                asset_token: asset_token
            }
        });
    };
    MirrorFactory.prototype.getConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.query({
                        config: {}
                    })];
            });
        });
    };
    MirrorFactory.prototype.getDistributionInfo = function (asset_token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.query({
                        distribution_info: { asset_token: asset_token }
                    })];
            });
        });
    };
    // Typed overloads
    MirrorFactory.prototype.query = function (query_msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _super.prototype.query.call(this, query_msg)];
            });
        });
    };
    MirrorFactory.prototype.createExecuteMsg = function (executeMsg, coins) {
        if (coins === void 0) { coins = {}; }
        return _super.prototype.createExecuteMsg.call(this, executeMsg, coins);
    };
    return MirrorFactory;
}(ContractClient_1.ContractClient));
exports.MirrorFactory = MirrorFactory;
//# sourceMappingURL=MirrorFactory.js.map