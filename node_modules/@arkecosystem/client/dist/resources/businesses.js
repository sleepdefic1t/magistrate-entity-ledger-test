"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Businesses = void 0;
const resource_1 = require("./resource");
class Businesses extends resource_1.Resource {
    async all(query) {
        return this.sendGet("businesses", query);
    }
    async get(walletAddress) {
        return this.sendGet(`businesses/${walletAddress}`);
    }
    async bridgechains(walletAddress, query) {
        return this.sendGet(`businesses/${walletAddress}/bridgechains`, query);
    }
    async bridgechain(walletAddress, genesisHash) {
        return this.sendGet(`businesses/${walletAddress}/bridgechains/${genesisHash}`);
    }
    async search(payload, query) {
        return this.sendPost("businesses/search", payload, query);
    }
}
exports.Businesses = Businesses;
//# sourceMappingURL=businesses.js.map