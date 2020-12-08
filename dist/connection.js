"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTransactionADN = exports.getConnectionADN = exports.ADN_CONNECTION = exports.ADN_VERSION = exports.ADN_HD_PATH = void 0;
const { Connection } = require("@arkecosystem/client");
const crypto_1 = require("@arkecosystem/crypto");
crypto_1.Managers.configManager.setFromPreset("devnet");
crypto_1.Managers.configManager.setHeight(6158074);
exports.ADN_HD_PATH = "44'/1'/0'/0/0";
exports.ADN_VERSION = 0x1e;
exports.ADN_CONNECTION = "https://dwallets.ark.io/api";
function getConnectionADN() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Connection(exports.ADN_CONNECTION);
    });
}
exports.getConnectionADN = getConnectionADN;
function sendTransactionADN(tx) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield getConnectionADN();
        const response = yield client.api("transactions").create({ transactions: [tx.toJson()] })
            .catch((e) => console.error(e));
        console.log('\nADN Response: ', response.body, '\n');
        return response;
    });
}
exports.sendTransactionADN = sendTransactionADN;
