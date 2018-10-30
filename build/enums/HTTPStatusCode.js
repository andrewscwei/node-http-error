"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Server response status enum.
 */
var HTTPStatusCode;
(function (HTTPStatusCode) {
    /**
     * Everything went well.
     */
    HTTPStatusCode[HTTPStatusCode["OK"] = 200] = "OK";
    /**
     * No errors but also no content.
     */
    HTTPStatusCode[HTTPStatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    /**
     * There is an error on the client's side.
     */
    HTTPStatusCode[HTTPStatusCode["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    /**
     * There is an (internal) error on the server's side.
     */
    HTTPStatusCode[HTTPStatusCode["SERVER_ERROR"] = 500] = "SERVER_ERROR";
    /**
     * Error due to authentication.
     */
    HTTPStatusCode[HTTPStatusCode["AUTHENTICATION_ERROR"] = 401] = "AUTHENTICATION_ERROR";
    /**
     * Requested resource not found.
     */
    HTTPStatusCode[HTTPStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
})(HTTPStatusCode || (HTTPStatusCode = {}));
exports.default = HTTPStatusCode;
//# sourceMappingURL=HTTPStatusCode.js.map