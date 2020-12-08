"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
const resource_1 = require("./resource");
class Transactions extends resource_1.Resource {
    async all(query) {
        return this.sendGet("transactions", query);
    }
    async create(payload) {
        return this.sendPost("transactions", payload);
    }
    async get(id) {
        return this.sendGet(`transactions/${id}`);
    }
    async allUnconfirmed(query) {
        return this.sendGet("transactions/unconfirmed", query);
    }
    async getUnconfirmed(id) {
        return this.sendGet(`transactions/unconfirmed/${id}`);
    }
    async search(payload, query) {
        return this.sendPost("transactions/search", payload, query);
    }
    async types() {
        return this.sendGet("transactions/types");
    }
    async fees() {
        return this.sendGet("transactions/fees");
    }
    async schemas() {
        return this.sendGet("transactions/schemas");
    }
}
exports.Transactions = Transactions;
//# sourceMappingURL=transactions.js.map