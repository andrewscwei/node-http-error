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
  constructor(message = `[${HTTPStatusCode.BAD_REQUEST}] ${getDefaultStatusCodeMessage(HTTPStatusCode.BAD_REQUEST)}`) {
    super(HTTPStatusCode.BAD_REQUEST, message);
  }
}

export class HTTPUnauthorizedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNAUTHORIZED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNAUTHORIZED)}`) {
    super(HTTPStatusCode.UNAUTHORIZED, message);
  }
}

export class HTTPPaymentRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PAYMENT_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PAYMENT_REQUIRED)}`) {
    super(HTTPStatusCode.PAYMENT_REQUIRED, message);
  }
}

export class HTTPForbiddenError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.FORBIDDEN}] ${getDefaultStatusCodeMessage(HTTPStatusCode.FORBIDDEN)}`) {
    super(HTTPStatusCode.FORBIDDEN, message);
  }
}

export class HTTPNotFoundError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_FOUND}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_FOUND)}`) {
    super(HTTPStatusCode.NOT_FOUND, message);
  }
}

export class HTTPMethodNotAllowedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.METHOD_NOT_ALLOWED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.METHOD_NOT_ALLOWED)}`) {
    super(HTTPStatusCode.METHOD_NOT_ALLOWED, message);
  }
}

export class HTTPNotAcceptableError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_ACCEPTABLE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_ACCEPTABLE)}`) {
    super(HTTPStatusCode.NOT_ACCEPTABLE, message);
  }
}

export class HTTPProxyAuthenticationRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED)}`) {
    super(HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED, message);
  }
}

export class HTTPRequestTimeoutError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.REQUEST_TIMEOUT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.REQUEST_TIMEOUT)}`) {
    super(HTTPStatusCode.REQUEST_TIMEOUT, message);
  }
}

export class HTTPConflictError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.CONFLICT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.CONFLICT)}`) {
    super(HTTPStatusCode.CONFLICT, message);
  }
}

export class HTTPGoneError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.GONE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.GONE)}`) {
    super(HTTPStatusCode.GONE, message);
  }
}

export class HTTPLengthRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.LENGTH_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.LENGTH_REQUIRED)}`) {
    super(HTTPStatusCode.LENGTH_REQUIRED, message);
  }
}

export class HTTPPreconditionFailedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PRECONDITION_FAILED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PRECONDITION_FAILED)}`) {
    super(HTTPStatusCode.PRECONDITION_FAILED, message);
  }
}

export class HTTPPayloadTooLargeError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PAYLOAD_TOO_LARGE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PAYLOAD_TOO_LARGE)}`) {
    super(HTTPStatusCode.PAYLOAD_TOO_LARGE, message);
  }
}

export class HTTPUriTooLongError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.URI_TOO_LONG}] ${getDefaultStatusCodeMessage(HTTPStatusCode.URI_TOO_LONG)}`) {
    super(HTTPStatusCode.URI_TOO_LONG, message);
  }
}

export class HTTPUnsupportedMediaTypeError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE)}`) {
    super(HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE, message);
  }
}

export class HTTPRangeNotSatisfiableError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.RANGE_NOT_SATISFIABLE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.RANGE_NOT_SATISFIABLE)}`) {
    super(HTTPStatusCode.RANGE_NOT_SATISFIABLE, message);
  }
}

export class HTTPExpectationFailedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.EXPECTATION_FAILED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.EXPECTATION_FAILED)}`) {
    super(HTTPStatusCode.EXPECTATION_FAILED, message);
  }
}

export class HTTPImATeapotError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.IM_A_TEAPOT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.IM_A_TEAPOT)}`) {
    super(HTTPStatusCode.IM_A_TEAPOT, message);
  }
}

export class HTTPMisdirectedRequestError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.MISDIRECTED_REQUEST}] ${getDefaultStatusCodeMessage(HTTPStatusCode.MISDIRECTED_REQUEST)}`) {
    super(HTTPStatusCode.MISDIRECTED_REQUEST, message);
  }
}

export class HTTPUnprocessableEntityError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNPROCESSABLE_ENTITY}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNPROCESSABLE_ENTITY)}`) {
    super(HTTPStatusCode.UNPROCESSABLE_ENTITY, message);
  }
}

export class HTTPLockedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.LOCKED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.LOCKED)}`) {
    super(HTTPStatusCode.LOCKED, message);
  }
}

export class HTTPFailedDependencyError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.FAILED_DEPENDENCY}] ${getDefaultStatusCodeMessage(HTTPStatusCode.FAILED_DEPENDENCY)}`) {
    super(HTTPStatusCode.FAILED_DEPENDENCY, message);
  }
}

export class HTTPUnorderedCollectionError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNORDERED_COLLECTION}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNORDERED_COLLECTION)}`) {
    super(HTTPStatusCode.UNORDERED_COLLECTION, message);
  }
}

export class HTTPUpgradeRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UPGRADE_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UPGRADE_REQUIRED)}`) {
    super(HTTPStatusCode.UPGRADE_REQUIRED, message);
  }
}

export class HTTPPreconditionRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PRECONDITION_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PRECONDITION_REQUIRED)}`) {
    super(HTTPStatusCode.PRECONDITION_REQUIRED, message);
  }
}

export class HTTPTooManyRequestsError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.TOO_MANY_REQUESTS}] ${getDefaultStatusCodeMessage(HTTPStatusCode.TOO_MANY_REQUESTS)}`) {
    super(HTTPStatusCode.TOO_MANY_REQUESTS, message);
  }
}

export class HTTPRequestHeaderFieldsTooLargeError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE)}`) {
    super(HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE, message);
  }
}

export class HTTPUnavailableForLegalReasonsError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS)}`) {
    super(HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS, message);
  }
}

export class HTTPInternalServerError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.INTERNAL_SERVER_ERROR}] ${getDefaultStatusCodeMessage(HTTPStatusCode.INTERNAL_SERVER_ERROR)}`) {
    super(HTTPStatusCode.INTERNAL_SERVER_ERROR, message);
  }
}

export class HTTPNotImplementedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_IMPLEMENTED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_IMPLEMENTED)}`) {
    super(HTTPStatusCode.NOT_IMPLEMENTED, message);
  }
}

export class HTTPBadGatewayError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.BAD_GATEWAY}] ${getDefaultStatusCodeMessage(HTTPStatusCode.BAD_GATEWAY)}`) {
    super(HTTPStatusCode.BAD_GATEWAY, message);
  }
}

export class HTTPServiceUnavailableError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.SERVICE_UNAVAILABLE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.SERVICE_UNAVAILABLE)}`) {
    super(HTTPStatusCode.SERVICE_UNAVAILABLE, message);
  }
}

export class HTTPGatewayTimeoutError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.GATEWAY_TIMEOUT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.GATEWAY_TIMEOUT)}`) {
    super(HTTPStatusCode.GATEWAY_TIMEOUT, message);
  }
}

export class HTTPHttpVersionNotSupportedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED)}`) {
    super(HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED, message);
  }
}

export class HTTPVariantAlsoNegotiatesError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.VARIANT_ALSO_NEGOTIATES}] ${getDefaultStatusCodeMessage(HTTPStatusCode.VARIANT_ALSO_NEGOTIATES)}`) {
    super(HTTPStatusCode.VARIANT_ALSO_NEGOTIATES, message);
  }
}

export class HTTPInsufficientStorageError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.INSUFFICIENT_STORAGE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.INSUFFICIENT_STORAGE)}`) {
    super(HTTPStatusCode.INSUFFICIENT_STORAGE, message);
  }
}

export class HTTPLoopDetectedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.LOOP_DETECTED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.LOOP_DETECTED)}`) {
    super(HTTPStatusCode.LOOP_DETECTED, message);
  }
}

export class HTTPBandwidthLimitExceededError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED)}`) {
    super(HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED, message);
  }
}

export class HTTPNotExtendedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_EXTENDED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_EXTENDED)}`) {
    super(HTTPStatusCode.NOT_EXTENDED, message);
  }
}

export class HTTPNetworkAuthenticationRequireError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE)}`) {
    super(HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE, message);
  }
}

export { HTTPStatusCode };
