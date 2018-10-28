import HTTPStatusCode from './enums/HTTPStatusCode';
export declare class HTTPServerError extends Error {
    readonly status = HTTPStatusCode.SERVER_ERROR;
}
export declare class HTTPClientError extends Error {
    readonly status = HTTPStatusCode.CLIENT_ERROR;
}
export declare class HTTPAuthenticationError extends Error {
    readonly status = HTTPStatusCode.AUTHENTICATION_ERROR;
}
export declare class HTTPNotFoundError extends Error {
    readonly status = HTTPStatusCode.NOT_FOUND;
}
export { HTTPStatusCode };
