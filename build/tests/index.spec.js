"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const mocha_1 = require("mocha");
const HTTPStatusCode_1 = __importDefault(require("../enums/HTTPStatusCode"));
const index_1 = require("../index");
mocha_1.describe('node-http-error', () => {
    mocha_1.it('can throw HTTPServerError', () => {
        const error = new index_1.HTTPServerError('There is a server error');
        assert_1.default(error.status === HTTPStatusCode_1.default.SERVER_ERROR);
        assert_1.default.throws(() => { throw error; });
    });
    mocha_1.it('can throw HTTPClientError', () => {
        const error = new index_1.HTTPClientError('There is a server error');
        assert_1.default(error.status === HTTPStatusCode_1.default.CLIENT_ERROR);
        assert_1.default.throws(() => { throw error; });
    });
    mocha_1.it('can throw HTTPAuthenticationError', () => {
        const error = new index_1.HTTPAuthenticationError('There is a server error');
        assert_1.default(error.status === HTTPStatusCode_1.default.AUTHENTICATION_ERROR);
        assert_1.default.throws(() => { throw error; });
    });
    mocha_1.it('can throw HTTPNotFoundError', () => {
        const error = new index_1.HTTPNotFoundError('There is a server error');
        assert_1.default(error.status === HTTPStatusCode_1.default.NOT_FOUND);
        assert_1.default.throws(() => { throw error; });
    });
});
//# sourceMappingURL=index.spec.js.map