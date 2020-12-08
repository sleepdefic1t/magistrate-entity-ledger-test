"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bridgechains = void 0;
const resource_1 = require("./resource");
class Bridgechains extends resource_1.Resource {
    async all(query) {
        return this.sendGet("bridgechains", query);
    }
    async search(payload, query) {
        return this.sendPost("bridgechains/search", payload, query);
    }
}
exports.Bridgechains = Bridgechains;
//# sourceMappingURL=bridgechains.js.map