"use strict";
/* tslint:disable max-classes-per-file */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPStatusCode_1 = __importDefault(require("./enums/HTTPStatusCode"));
exports.HTTPStatusCode = HTTPStatusCode_1.default;
class HTTPServerError extends Error {
    constructor() {
        super(...arguments);
        this.status = HTTPStatusCode_1.default.SERVER_ERROR;
    }
}
exports.HTTPServerError = HTTPServerError;
class HTTPClientError extends Error {
    constructor() {
        super(...arguments);
        this.status = HTTPStatusCode_1.default.CLIENT_ERROR;
    }
}
exports.HTTPClientError = HTTPClientError;
class HTTPAuthenticationError extends Error {
    constructor() {
        super(...arguments);
        this.status = HTTPStatusCode_1.default.AUTHENTICATION_ERROR;
    }
}
exports.HTTPAuthenticationError = HTTPAuthenticationError;
class HTTPNotFoundError extends Error {
    constructor() {
        super(...arguments);
        this.status = HTTPStatusCode_1.default.NOT_FOUND;
    }
}
exports.HTTPNotFoundError = HTTPNotFoundError;
//# sourceMappingURL=index.js.map