"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rounds = void 0;
const resource_1 = require("./resource");
class Rounds extends resource_1.Resource {
    async delegates(roundNumber) {
        return this.sendGet(`rounds/${roundNumber}/delegates`);
    }
}
exports.Rounds = Rounds;
//# sourceMappingURL=rounds.js.map