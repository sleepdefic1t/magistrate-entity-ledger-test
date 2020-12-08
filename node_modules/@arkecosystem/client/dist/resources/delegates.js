"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delegates = void 0;
const resource_1 = require("./resource");
class Delegates extends resource_1.Resource {
    async all(query) {
        return this.sendGet("delegates", query);
    }
    async get(usernameOrAddressOrPublicKey) {
        return this.sendGet(`delegates/${usernameOrAddressOrPublicKey}`);
    }
    async blocks(usernameOrAddressOrPublicKey, query) {
        return this.sendGet(`delegates/${usernameOrAddressOrPublicKey}/blocks`, query);
    }
    async voters(usernameOrAddressOrPublicKey, query) {
        return this.sendGet(`delegates/${usernameOrAddressOrPublicKey}/voters`, query);
    }
    async search(payload, query) {
        return this.sendPost("delegates/search", payload, query);
    }
}
exports.Delegates = Delegates;
//# sourceMappingURL=delegates.js.map