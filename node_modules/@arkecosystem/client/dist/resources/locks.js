"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locks = void 0;
const resource_1 = require("./resource");
class Locks extends resource_1.Resource {
    async all(query) {
        return this.sendGet("locks", query);
    }
    async get(id) {
        return this.sendGet(`locks/${id}`);
    }
    async search(payload, query) {
        return this.sendPost("locks/search", payload, query);
    }
    async unlocked(payload, query) {
        return this.sendPost("locks/unlocked", payload, query);
    }
}
exports.Locks = Locks;
//# sourceMappingURL=locks.js.map