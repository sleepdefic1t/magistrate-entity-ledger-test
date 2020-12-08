"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallets = void 0;
const resource_1 = require("./resource");
class Wallets extends resource_1.Resource {
    async all(query) {
        return this.sendGet("wallets", query);
    }
    async get(addressOrPublicKey) {
        return this.sendGet(`wallets/${addressOrPublicKey}`);
    }
    async transactions(addressOrPublicKey, query) {
        return this.sendGet(`wallets/${addressOrPublicKey}/transactions`, query);
    }
    async transactionsReceived(addressOrPublicKey, query) {
        return this.sendGet(`wallets/${addressOrPublicKey}/transactions/received`, query);
    }
    async transactionsSent(addressOrPublicKey, query) {
        return this.sendGet(`wallets/${addressOrPublicKey}/transactions/sent`, query);
    }
    async votes(addressOrPublicKey, query) {
        return this.sendGet(`wallets/${addressOrPublicKey}/votes`, query);
    }
    async top(query) {
        return this.sendGet("wallets/top", query);
    }
    async search(payload, query) {
        return this.sendPost("wallets/search", payload, query);
    }
    async locks(addressOrPublicKey, query) {
        return this.sendGet(`wallets/${addressOrPublicKey}/locks`, query);
    }
}
exports.Wallets = Wallets;
//# sourceMappingURL=wallets.js.map