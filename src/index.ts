/* tslint:disable max-classes-per-file */

import http from 'http';
import HTTPStatusCode from './enums/HTTPStatusCode';

export function getDefaultStatusCodeMessage(statusCode: HTTPStatusCode) {
  return http.STATUS_CODES[String(statusCode)];
}

export class HTTPError extends Error {
  readonly status: number;

  constructor(status: number, message?: string) {
    super(message);
    this.status = status;
  }
}

export class HTTPBadRequestError extends HTTPError {
  constructor(status: number = HTTPStatusCode.BAD_REQUEST, message = `[${HTTPStatusCode.BAD_REQUEST}] ${getDefaultStatusCodeMessage(HTTPStatusCode.BAD_REQUEST)}`) {
    super(status, message);
  }
}

export class HTTPUnauthorizedError extends HTTPError {
  constructor(status: number = HTTPStatusCode.UNAUTHORIZED, message = `[${HTTPStatusCode.UNAUTHORIZED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNAUTHORIZED)}`) {
    super(status, message);
  }
}

export class HTTPPaymentRequiredError extends HTTPError {
  constructor(status: number = HTTPStatusCode.PAYMENT_REQUIRED, message = `[${HTTPStatusCode.PAYMENT_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PAYMENT_REQUIRED)}`) {
    super(status, message);
  }
}

export class HTTPForbiddenError extends HTTPError {
  constructor(status: number = HTTPStatusCode.FORBIDDEN, message = `[${HTTPStatusCode.FORBIDDEN}] ${getDefaultStatusCodeMessage(HTTPStatusCode.FORBIDDEN)}`) {
    super(status, message);
  }
}

export class HTTPNotFoundError extends HTTPError {
  constructor(status: number = HTTPStatusCode.NOT_FOUND, message = `[${HTTPStatusCode.NOT_FOUND}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_FOUND)}`) {
    super(status, message);
  }
}

export class HTTPMethodNotAllowedError extends HTTPError {
  constructor(status: number = HTTPStatusCode.METHOD_NOT_ALLOWED, message = `[${HTTPStatusCode.METHOD_NOT_ALLOWED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.METHOD_NOT_ALLOWED)}`) {
    super(status, message);
  }
}

export class HTTPNotAcceptableError extends HTTPError {
  constructor(status: number = HTTPStatusCode.NOT_ACCEPTABLE, message = `[${HTTPStatusCode.NOT_ACCEPTABLE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_ACCEPTABLE)}`) {
    super(status, message);
  }
}

export class HTTPProxyAuthenticationRequiredError extends HTTPError {
  constructor(status: number = HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED, message = `[${HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED)}`) {
    super(status, message);
  }
}

export class HTTPRequestTimeoutError extends HTTPError {
  constructor(status: number = HTTPStatusCode.REQUEST_TIMEOUT, message = `[${HTTPStatusCode.REQUEST_TIMEOUT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.REQUEST_TIMEOUT)}`) {
    super(status, message);
  }
}

export class HTTPConflictError extends HTTPError {
  constructor(status: number = HTTPStatusCode.CONFLICT, message = `[${HTTPStatusCode.CONFLICT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.CONFLICT)}`) {
    super(status, message);
  }
}

export class HTTPGoneError extends HTTPError {
  constructor(status: number = HTTPStatusCode.GONE, message = `[${HTTPStatusCode.GONE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.GONE)}`) {
    super(status, message);
  }
}

export class HTTPLengthRequiredError extends HTTPError {
  constructor(status: number = HTTPStatusCode.LENGTH_REQUIRED, message = `[${HTTPStatusCode.LENGTH_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.LENGTH_REQUIRED)}`) {
    super(status, message);
  }
}

export class HTTPPreconditionFailedError extends HTTPError {
  constructor(status: number = HTTPStatusCode.PRECONDITION_FAILED, message = `[${HTTPStatusCode.PRECONDITION_FAILED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PRECONDITION_FAILED)}`) {
    super(status, message);
  }
}

export class HTTPPayloadTooLargeError extends HTTPError {
  constructor(status: number = HTTPStatusCode.PAYLOAD_TOO_LARGE, message = `[${HTTPStatusCode.PAYLOAD_TOO_LARGE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PAYLOAD_TOO_LARGE)}`) {
    super(status, message);
  }
}

export class HTTPUriTooLongError extends HTTPError {
  constructor(status: number = HTTPStatusCode.URI_TOO_LONG, message = `[${HTTPStatusCode.URI_TOO_LONG}] ${getDefaultStatusCodeMessage(HTTPStatusCode.URI_TOO_LONG)}`) {
    super(status, message);
  }
}

export class HTTPUnsupportedMediaTypeError extends HTTPError {
  constructor(status: number = HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE, message = `[${HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE)}`) {
    super(status, message);
  }
}

export class HTTPRangeNotSatisfiableError extends HTTPError {
  constructor(status: number = HTTPStatusCode.RANGE_NOT_SATISFIABLE, message = `[${HTTPStatusCode.RANGE_NOT_SATISFIABLE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.RANGE_NOT_SATISFIABLE)}`) {
    super(status, message);
  }
}

export class HTTPExpectationFailedError extends HTTPError {
  constructor(status: number = HTTPStatusCode.EXPECTATION_FAILED, message = `[${HTTPStatusCode.EXPECTATION_FAILED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.EXPECTATION_FAILED)}`) {
    super(status, message);
  }
}

export class HTTPImATeapotError extends HTTPError {
  constructor(status: number = HTTPStatusCode.IM_A_TEAPOT, message = `[${HTTPStatusCode.IM_A_TEAPOT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.IM_A_TEAPOT)}`) {
    super(status, message);
  }
}

export class HTTPMisdirectedRequestError extends HTTPError {
  constructor(status: number = HTTPStatusCode.MISDIRECTED_REQUEST, message = `[${HTTPStatusCode.MISDIRECTED_REQUEST}] ${getDefaultStatusCodeMessage(HTTPStatusCode.MISDIRECTED_REQUEST)}`) {
    super(status, message);
  }
}

export class HTTPUnprocessableEntityError extends HTTPError {
  constructor(status: number = HTTPStatusCode.UNPROCESSABLE_ENTITY, message = `[${HTTPStatusCode.UNPROCESSABLE_ENTITY}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNPROCESSABLE_ENTITY)}`) {
    super(status, message);
  }
}

export class HTTPLockedError extends HTTPError {
  constructor(status: number = HTTPStatusCode.LOCKED, message = `[${HTTPStatusCode.LOCKED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.LOCKED)}`) {
    super(status, message);
  }
}

export class HTTPFailedDependencyError extends HTTPError {
  constructor(status: number = HTTPStatusCode.FAILED_DEPENDENCY, message = `[${HTTPStatusCode.FAILED_DEPENDENCY}] ${getDefaultStatusCodeMessage(HTTPStatusCode.FAILED_DEPENDENCY)}`) {
    super(status, message);
  }
}

export class HTTPUnorderedCollectionError extends HTTPError {
  constructor(status: number = HTTPStatusCode.UNORDERED_COLLECTION, message = `[${HTTPStatusCode.UNORDERED_COLLECTION}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNORDERED_COLLECTION)}`) {
    super(status, message);
  }
}

export class HTTPUpgradeRequiredError extends HTTPError {
  constructor(status: number = HTTPStatusCode.UPGRADE_REQUIRED, message = `[${HTTPStatusCode.UPGRADE_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UPGRADE_REQUIRED)}`) {
    super(status, message);
  }
}

export class HTTPPreconditionRequiredError extends HTTPError {
  constructor(status: number = HTTPStatusCode.PRECONDITION_REQUIRED, message = `[${HTTPStatusCode.PRECONDITION_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PRECONDITION_REQUIRED)}`) {
    super(status, message);
  }
}

export class HTTPTooManyRequestsError extends HTTPError {
  constructor(status: number = HTTPStatusCode.TOO_MANY_REQUESTS, message = `[${HTTPStatusCode.TOO_MANY_REQUESTS}] ${getDefaultStatusCodeMessage(HTTPStatusCode.TOO_MANY_REQUESTS)}`) {
    super(status, message);
  }
}

export class HTTPRequestHeaderFieldsTooLargeError extends HTTPError {
  constructor(status: number = HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE, message = `[${HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE)}`) {
    super(status, message);
  }
}

export class HTTPUnavailableForLegalReasonsError extends HTTPError {
  constructor(status: number = HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS, message = `[${HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS)}`) {
    super(status, message);
  }
}

export class HTTPInternalServerError extends HTTPError {
  constructor(status: number = HTTPStatusCode.INTERNAL_SERVER_ERROR, message = `[${HTTPStatusCode.INTERNAL_SERVER_ERROR}] ${getDefaultStatusCodeMessage(HTTPStatusCode.INTERNAL_SERVER_ERROR)}`) {
    super(status, message);
  }
}

export class HTTPNotImplementedError extends HTTPError {
  constructor(status: number = HTTPStatusCode.NOT_IMPLEMENTED, message = `[${HTTPStatusCode.NOT_IMPLEMENTED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_IMPLEMENTED)}`) {
    super(status, message);
  }
}

export class HTTPBadGatewayError extends HTTPError {
  constructor(status: number = HTTPStatusCode.BAD_GATEWAY, message = `[${HTTPStatusCode.BAD_GATEWAY}] ${getDefaultStatusCodeMessage(HTTPStatusCode.BAD_GATEWAY)}`) {
    super(status, message);
  }
}

export class HTTPServiceUnavailableError extends HTTPError {
  constructor(status: number = HTTPStatusCode.SERVICE_UNAVAILABLE, message = `[${HTTPStatusCode.SERVICE_UNAVAILABLE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.SERVICE_UNAVAILABLE)}`) {
    super(status, message);
  }
}

export class HTTPGatewayTimeoutError extends HTTPError {
  constructor(status: number = HTTPStatusCode.GATEWAY_TIMEOUT, message = `[${HTTPStatusCode.GATEWAY_TIMEOUT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.GATEWAY_TIMEOUT)}`) {
    super(status, message);
  }
}

export class HTTPHttpVersionNotSupportedError extends HTTPError {
  constructor(status: number = HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED, message = `[${HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED)}`) {
    super(status, message);
  }
}

export class HTTPVariantAlsoNegotiatesError extends HTTPError {
  constructor(status: number = HTTPStatusCode.VARIANT_ALSO_NEGOTIATES, message = `[${HTTPStatusCode.VARIANT_ALSO_NEGOTIATES}] ${getDefaultStatusCodeMessage(HTTPStatusCode.VARIANT_ALSO_NEGOTIATES)}`) {
    super(status, message);
  }
}

export class HTTPInsufficientStorageError extends HTTPError {
  constructor(status: number = HTTPStatusCode.INSUFFICIENT_STORAGE, message = `[${HTTPStatusCode.INSUFFICIENT_STORAGE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.INSUFFICIENT_STORAGE)}`) {
    super(status, message);
  }
}

export class HTTPLoopDetectedError extends HTTPError {
  constructor(status: number = HTTPStatusCode.LOOP_DETECTED, message = `[${HTTPStatusCode.LOOP_DETECTED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.LOOP_DETECTED)}`) {
    super(status, message);
  }
}

export class HTTPBandwidthLimitExceededError extends HTTPError {
  constructor(status: number = HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED, message = `[${HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED)}`) {
    super(status, message);
  }
}

export class HTTPNotExtendedError extends HTTPError {
  constructor(status: number = HTTPStatusCode.NOT_EXTENDED, message = `[${HTTPStatusCode.NOT_EXTENDED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_EXTENDED)}`) {
    super(status, message);
  }
}

export class HTTPNetworkAuthenticationRequireError extends HTTPError {
  constructor(status: number = HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE, message = `[${HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE)}`) {
    super(status, message);
  }
}

export { HTTPStatusCode };

