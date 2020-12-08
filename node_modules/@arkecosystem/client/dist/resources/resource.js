"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
class Resource {
    constructor(connection) {
        this.connection = connection;
        this.opts = {};
    }
    withOptions(opts) {
        this.opts = opts;
        return this;
    }
    resetOptions() {
        this.opts = {};
        return this;
    }
    async sendGet(url, query) {
        const response = await this.connection.get(url, { ...this.opts, ...{ searchParams: query } });
        this.resetOptions();
        return response;
    }
    async sendPost(url, body, query) {
        const response = await this.connection.post(url, { ...this.opts, ...{ body }, ...{ searchParams: query } });
        this.resetOptions();
        return response;
    }
}
exports.Resource = Resource;
//# sourceMappingURL=resource.js.map