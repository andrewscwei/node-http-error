/* tslint:disable max-classes-per-file */

import HTTPStatusCode from './enums/HTTPStatusCode';

export class HTTPServerError extends Error {
  readonly status = HTTPStatusCode.SERVER_ERROR;
}

export class HTTPClientError extends Error {
  readonly status = HTTPStatusCode.CLIENT_ERROR;
}

export class HTTPAuthenticationError extends Error {
  readonly status = HTTPStatusCode.AUTHENTICATION_ERROR;
}

export class HTTPNotFoundError extends Error {
  readonly status = HTTPStatusCode.NOT_FOUND;
}

export { HTTPStatusCode };
