"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const is_url_superb_1 = __importDefault(require("is-url-superb"));
const ky_universal_1 = __importDefault(require("ky-universal"));
const errors_1 = require("./errors");
const resources_1 = require("./resources");
class Connection {
    constructor(host) {
        this.host = host;
        if (!is_url_superb_1.default(host)) {
            throw new Error(`${host} is not a valid URL.`);
        }
    }
    api(name) {
        const selectedResourceClass = resources_1.Resources[name.toLowerCase()];
        return new selectedResourceClass(this);
    }
    withOptions(opts) {
        this.opts = opts;
        return this;
    }
    async get(url, opts) {
        return this.sendRequest("get", url, opts);
    }
    async post(url, opts) {
        return this.sendRequest("post", url, opts);
    }
    async sendRequest(method, url, opts) {
        opts = { ...this.opts, ...(opts || {}) };
        if (!opts.retry) {
            opts.retry = { retries: 0 };
        }
        if (!opts.timeout) {
            opts.timeout = 1500;
        }
        try {
            const response = await ky_universal_1.default(`${this.host}/${url}`, { ...opts, method, json: opts.body });
            return {
                body: await response.json(),
                headers: response.headers,
                status: response.status,
            };
        }
        catch (error) {
            if (error.response) {
                error.response = {
                    body: await error.response.json(),
                    headers: error.response.headers,
                    status: error.response.status,
                };
            }
            throw new errors_1.RequestError(error);
        }
    }
}
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map