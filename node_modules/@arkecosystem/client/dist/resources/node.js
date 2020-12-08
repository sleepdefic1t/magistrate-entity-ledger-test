"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const resource_1 = require("./resource");
class Node extends resource_1.Resource {
    async configuration() {
        return this.sendGet("node/configuration");
    }
    async crypto() {
        return this.sendGet("node/configuration/crypto");
    }
    async fees(days) {
        return this.sendGet("node/fees", { days });
    }
    async status() {
        return this.sendGet("node/status");
    }
    async syncing() {
        return this.sendGet("node/syncing");
    }
}
exports.Node = Node;
//# sourceMappingURL=node.js.map