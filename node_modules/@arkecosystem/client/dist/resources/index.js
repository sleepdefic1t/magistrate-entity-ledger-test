"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resources = void 0;
const blocks_1 = require("./blocks");
const bridgechains_1 = require("./bridgechains");
const businesses_1 = require("./businesses");
const delegates_1 = require("./delegates");
const locks_1 = require("./locks");
const node_1 = require("./node");
const peers_1 = require("./peers");
const rounds_1 = require("./rounds");
const transactions_1 = require("./transactions");
const votes_1 = require("./votes");
const wallets_1 = require("./wallets");
__exportStar(require("./resource"), exports);
exports.Resources = {
    blocks: blocks_1.Blocks,
    bridgechains: bridgechains_1.Bridgechains,
    businesses: businesses_1.Businesses,
    delegates: delegates_1.Delegates,
    locks: locks_1.Locks,
    node: node_1.Node,
    peers: peers_1.Peers,
    rounds: rounds_1.Rounds,
    transactions: transactions_1.Transactions,
    votes: votes_1.Votes,
    wallets: wallets_1.Wallets,
};
//# sourceMappingURL=index.js.map