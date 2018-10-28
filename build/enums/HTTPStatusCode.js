"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatusCode;
(function (HTTPStatusCode) {
    HTTPStatusCode[HTTPStatusCode["OK"] = 200] = "OK";
    HTTPStatusCode[HTTPStatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    HTTPStatusCode[HTTPStatusCode["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    HTTPStatusCode[HTTPStatusCode["SERVER_ERROR"] = 500] = "SERVER_ERROR";
    HTTPStatusCode[HTTPStatusCode["AUTHENTICATION_ERROR"] = 401] = "AUTHENTICATION_ERROR";
    HTTPStatusCode[HTTPStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
})(HTTPStatusCode || (HTTPStatusCode = {}));
exports.default = HTTPStatusCode;
//# sourceMappingURL=HTTPStatusCode.js.map