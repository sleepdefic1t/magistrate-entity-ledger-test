"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blocks = void 0;
const resource_1 = require("./resource");
class Blocks extends resource_1.Resource {
    async all(query) {
        return this.sendGet("blocks", query);
    }
    async first() {
        return this.sendGet("blocks/first");
    }
    async last() {
        return this.sendGet("blocks/last");
    }
    async get(idOrHeight) {
        return this.sendGet(`blocks/${idOrHeight}`);
    }
    async transactions(idOrHeight, query) {
        return this.sendGet(`blocks/${idOrHeight}/transactions`, query);
    }
    async search(payload, query) {
        return this.sendPost("blocks/search", payload, query);
    }
}
exports.Blocks = Blocks;
//# sourceMappingURL=blocks.js.map