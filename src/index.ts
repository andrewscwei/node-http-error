/* tslint:disable max-classes-per-file */

import http from 'http';
import HTTPStatusCode from './enums/HTTPStatusCode';

export function getDefaultStatusCodeMessage(statusCode: HTTPStatusCode) {
  return http.STATUS_CODES[String(statusCode)];
}

export class HTTPError extends Error {
  readonly status: number;
  readonly info?: any;

  constructor(status: number, message?: string, info?: any) {
    super(message);
    this.status = status;
    this.info = info;
  }
}

export class HTTPBadRequestError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.BAD_REQUEST}] ${getDefaultStatusCodeMessage(HTTPStatusCode.BAD_REQUEST)}`, info?: any) {
    super(HTTPStatusCode.BAD_REQUEST, message, info);
  }
}

export class HTTPUnauthorizedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNAUTHORIZED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNAUTHORIZED)}`, info?: any) {
    super(HTTPStatusCode.UNAUTHORIZED, message, info);
  }
}

export class HTTPPaymentRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PAYMENT_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PAYMENT_REQUIRED)}`, info?: any) {
    super(HTTPStatusCode.PAYMENT_REQUIRED, message, info);
  }
}

export class HTTPForbiddenError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.FORBIDDEN}] ${getDefaultStatusCodeMessage(HTTPStatusCode.FORBIDDEN)}`, info?: any) {
    super(HTTPStatusCode.FORBIDDEN, message, info);
  }
}

export class HTTPNotFoundError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_FOUND}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_FOUND)}`, info?: any) {
    super(HTTPStatusCode.NOT_FOUND, message, info);
  }
}

export class HTTPMethodNotAllowedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.METHOD_NOT_ALLOWED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.METHOD_NOT_ALLOWED)}`, info?: any) {
    super(HTTPStatusCode.METHOD_NOT_ALLOWED, message, info);
  }
}

export class HTTPNotAcceptableError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_ACCEPTABLE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_ACCEPTABLE)}`, info?: any) {
    super(HTTPStatusCode.NOT_ACCEPTABLE, message, info);
  }
}

export class HTTPProxyAuthenticationRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED)}`, info?: any) {
    super(HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED, message, info);
  }
}

export class HTTPRequestTimeoutError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.REQUEST_TIMEOUT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.REQUEST_TIMEOUT)}`, info?: any) {
    super(HTTPStatusCode.REQUEST_TIMEOUT, message, info);
  }
}

export class HTTPConflictError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.CONFLICT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.CONFLICT)}`, info?: any) {
    super(HTTPStatusCode.CONFLICT, message, info);
  }
}

export class HTTPGoneError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.GONE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.GONE)}`, info?: any) {
    super(HTTPStatusCode.GONE, message, info);
  }
}

export class HTTPLengthRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.LENGTH_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.LENGTH_REQUIRED)}`, info?: any) {
    super(HTTPStatusCode.LENGTH_REQUIRED, message, info);
  }
}

export class HTTPPreconditionFailedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PRECONDITION_FAILED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PRECONDITION_FAILED)}`, info?: any) {
    super(HTTPStatusCode.PRECONDITION_FAILED, message, info);
  }
}

export class HTTPPayloadTooLargeError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PAYLOAD_TOO_LARGE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PAYLOAD_TOO_LARGE)}`, info?: any) {
    super(HTTPStatusCode.PAYLOAD_TOO_LARGE, message, info);
  }
}

export class HTTPUriTooLongError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.URI_TOO_LONG}] ${getDefaultStatusCodeMessage(HTTPStatusCode.URI_TOO_LONG)}`, info?: any) {
    super(HTTPStatusCode.URI_TOO_LONG, message, info);
  }
}

export class HTTPUnsupportedMediaTypeError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE)}`, info?: any) {
    super(HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE, message, info);
  }
}

export class HTTPRangeNotSatisfiableError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.RANGE_NOT_SATISFIABLE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.RANGE_NOT_SATISFIABLE)}`, info?: any) {
    super(HTTPStatusCode.RANGE_NOT_SATISFIABLE, message, info);
  }
}

export class HTTPExpectationFailedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.EXPECTATION_FAILED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.EXPECTATION_FAILED)}`, info?: any) {
    super(HTTPStatusCode.EXPECTATION_FAILED, message, info);
  }
}

export class HTTPImATeapotError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.IM_A_TEAPOT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.IM_A_TEAPOT)}`, info?: any) {
    super(HTTPStatusCode.IM_A_TEAPOT, message, info);
  }
}

export class HTTPMisdirectedRequestError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.MISDIRECTED_REQUEST}] ${getDefaultStatusCodeMessage(HTTPStatusCode.MISDIRECTED_REQUEST)}`, info?: any) {
    super(HTTPStatusCode.MISDIRECTED_REQUEST, message, info);
  }
}

export class HTTPUnprocessableEntityError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNPROCESSABLE_ENTITY}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNPROCESSABLE_ENTITY)}`, info?: any) {
    super(HTTPStatusCode.UNPROCESSABLE_ENTITY, message, info);
  }
}

export class HTTPLockedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.LOCKED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.LOCKED)}`, info?: any) {
    super(HTTPStatusCode.LOCKED, message, info);
  }
}

export class HTTPFailedDependencyError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.FAILED_DEPENDENCY}] ${getDefaultStatusCodeMessage(HTTPStatusCode.FAILED_DEPENDENCY)}`, info?: any) {
    super(HTTPStatusCode.FAILED_DEPENDENCY, message, info);
  }
}

export class HTTPUnorderedCollectionError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNORDERED_COLLECTION}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNORDERED_COLLECTION)}`, info?: any) {
    super(HTTPStatusCode.UNORDERED_COLLECTION, message, info);
  }
}

export class HTTPUpgradeRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UPGRADE_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UPGRADE_REQUIRED)}`, info?: any) {
    super(HTTPStatusCode.UPGRADE_REQUIRED, message, info);
  }
}

export class HTTPPreconditionRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PRECONDITION_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PRECONDITION_REQUIRED)}`, info?: any) {
    super(HTTPStatusCode.PRECONDITION_REQUIRED, message, info);
  }
}

export class HTTPTooManyRequestsError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.TOO_MANY_REQUESTS}] ${getDefaultStatusCodeMessage(HTTPStatusCode.TOO_MANY_REQUESTS)}`, info?: any) {
    super(HTTPStatusCode.TOO_MANY_REQUESTS, message, info);
  }
}

export class HTTPRequestHeaderFieldsTooLargeError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE)}`, info?: any) {
    super(HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE, message, info);
  }
}

export class HTTPUnavailableForLegalReasonsError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS)}`, info?: any) {
    super(HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS, message, info);
  }
}

export class HTTPInternalServerError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.INTERNAL_SERVER_ERROR}] ${getDefaultStatusCodeMessage(HTTPStatusCode.INTERNAL_SERVER_ERROR)}`, info?: any) {
    super(HTTPStatusCode.INTERNAL_SERVER_ERROR, message, info);
  }
}

export class HTTPNotImplementedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_IMPLEMENTED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_IMPLEMENTED)}`, info?: any) {
    super(HTTPStatusCode.NOT_IMPLEMENTED, message, info);
  }
}

export class HTTPBadGatewayError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.BAD_GATEWAY}] ${getDefaultStatusCodeMessage(HTTPStatusCode.BAD_GATEWAY)}`, info?: any) {
    super(HTTPStatusCode.BAD_GATEWAY, message, info);
  }
}

export class HTTPServiceUnavailableError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.SERVICE_UNAVAILABLE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.SERVICE_UNAVAILABLE)}`, info?: any) {
    super(HTTPStatusCode.SERVICE_UNAVAILABLE, message, info);
  }
}

export class HTTPGatewayTimeoutError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.GATEWAY_TIMEOUT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.GATEWAY_TIMEOUT)}`, info?: any) {
    super(HTTPStatusCode.GATEWAY_TIMEOUT, message, info);
  }
}

export class HTTPHttpVersionNotSupportedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED)}`, info?: any) {
    super(HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED, message, info);
  }
}

export class HTTPVariantAlsoNegotiatesError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.VARIANT_ALSO_NEGOTIATES}] ${getDefaultStatusCodeMessage(HTTPStatusCode.VARIANT_ALSO_NEGOTIATES)}`, info?: any) {
    super(HTTPStatusCode.VARIANT_ALSO_NEGOTIATES, message, info);
  }
}

export class HTTPInsufficientStorageError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.INSUFFICIENT_STORAGE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.INSUFFICIENT_STORAGE)}`, info?: any) {
    super(HTTPStatusCode.INSUFFICIENT_STORAGE, message, info);
  }
}

export class HTTPLoopDetectedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.LOOP_DETECTED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.LOOP_DETECTED)}`, info?: any) {
    super(HTTPStatusCode.LOOP_DETECTED, message, info);
  }
}

export class HTTPBandwidthLimitExceededError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED)}`, info?: any) {
    super(HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED, message, info);
  }
}

export class HTTPNotExtendedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_EXTENDED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_EXTENDED)}`, info?: any) {
    super(HTTPStatusCode.NOT_EXTENDED, message, info);
  }
}

export class HTTPNetworkAuthenticationRequireError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE)}`, info?: any) {
    super(HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE, message, info);
  }
}

export { HTTPStatusCode };
