/* eslint-disable max-classes-per-file */

import { SuperError } from '@andrewscwei/super-error'
import http from 'http'
import HTTPStatusCode from './enums/HTTPStatusCode'

export function getDefaultStatusCodeMessage(statusCode: HTTPStatusCode) {
  return http.STATUS_CODES[String(statusCode)]
}

export class HTTPError extends SuperError {
  readonly status: number

  constructor(status: number, message?: string, code?: string, info?: { [key: string]: any }) {
    super(message, code, info)
    this.name = 'HTTPError'
    this.status = status
  }
}

export class HTTPBadRequestError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.BAD_REQUEST}] ${getDefaultStatusCodeMessage(HTTPStatusCode.BAD_REQUEST)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.BAD_REQUEST, message, code, info)
    this.name = 'HTTPBadRequestError'
  }
}

export class HTTPUnauthorizedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNAUTHORIZED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNAUTHORIZED)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.UNAUTHORIZED, message, code, info)
    this.name = 'HTTPUnauthorizedError'
  }
}

export class HTTPPaymentRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PAYMENT_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PAYMENT_REQUIRED)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.PAYMENT_REQUIRED, message, code, info)
    this.name = 'HTTPPaymentRequiredError'
  }
}

export class HTTPForbiddenError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.FORBIDDEN}] ${getDefaultStatusCodeMessage(HTTPStatusCode.FORBIDDEN)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.FORBIDDEN, message, code, info)
    this.name = 'HTTPForbiddenError'
  }
}

export class HTTPNotFoundError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_FOUND}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_FOUND)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.NOT_FOUND, message, code, info)
    this.name = 'HTTPNotFoundError'
  }
}

export class HTTPMethodNotAllowedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.METHOD_NOT_ALLOWED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.METHOD_NOT_ALLOWED)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.METHOD_NOT_ALLOWED, message, code, info)
    this.name = 'HTTPMethodNotAllowedError'
  }
}

export class HTTPNotAcceptableError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_ACCEPTABLE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_ACCEPTABLE)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.NOT_ACCEPTABLE, message, code, info)
    this.name = 'HTTPNotAcceptableError'
  }
}

export class HTTPProxyAuthenticationRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED, message, code, info)
    this.name = 'HTTPProxyAuthenticationRequiredError'
  }
}

export class HTTPRequestTimeoutError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.REQUEST_TIMEOUT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.REQUEST_TIMEOUT)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.REQUEST_TIMEOUT, message, code, info)
    this.name = 'HTTPRequestTimeoutError'
  }
}

export class HTTPConflictError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.CONFLICT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.CONFLICT)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.CONFLICT, message, code, info)
    this.name = 'HTTPConflictError'
  }
}

export class HTTPGoneError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.GONE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.GONE)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.GONE, message, code, info)
    this.name = 'HTTPGoneError'
  }
}

export class HTTPLengthRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.LENGTH_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.LENGTH_REQUIRED)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.LENGTH_REQUIRED, message, code, info)
    this.name = 'HTTPLengthRequiredError'
  }
}

export class HTTPPreconditionFailedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PRECONDITION_FAILED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PRECONDITION_FAILED)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.PRECONDITION_FAILED, message, code, info)
    this.name = 'HTTPPreconditionFailedError'
  }
}

export class HTTPPayloadTooLargeError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PAYLOAD_TOO_LARGE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PAYLOAD_TOO_LARGE)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.PAYLOAD_TOO_LARGE, message, code, info)
    this.name = 'HTTPPayloadTooLargeError'
  }
}

export class HTTPUriTooLongError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.URI_TOO_LONG}] ${getDefaultStatusCodeMessage(HTTPStatusCode.URI_TOO_LONG)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.URI_TOO_LONG, message, code, info)
    this.name = 'HTTPUriTooLongError'
  }
}

export class HTTPUnsupportedMediaTypeError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE, message, code, info)
    this.name = 'HTTPUnsupportedMediaTypeError'
  }
}

export class HTTPRangeNotSatisfiableError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.RANGE_NOT_SATISFIABLE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.RANGE_NOT_SATISFIABLE)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.RANGE_NOT_SATISFIABLE, message, code, info)
    this.name = 'HTTPRangeNotSatisfiableError'
  }
}

export class HTTPExpectationFailedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.EXPECTATION_FAILED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.EXPECTATION_FAILED)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.EXPECTATION_FAILED, message, code, info)
    this.name = 'HTTPExpectationFailedError'
  }
}

export class HTTPImATeapotError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.IM_A_TEAPOT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.IM_A_TEAPOT)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.IM_A_TEAPOT, message, code, info)
    this.name = 'HTTPImATeapotError'
  }
}

export class HTTPMisdirectedRequestError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.MISDIRECTED_REQUEST}] ${getDefaultStatusCodeMessage(HTTPStatusCode.MISDIRECTED_REQUEST)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.MISDIRECTED_REQUEST, message, code, info)
    this.name = 'HTTPMisdirectedRequestError'
  }
}

export class HTTPUnprocessableEntityError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNPROCESSABLE_ENTITY}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNPROCESSABLE_ENTITY)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.UNPROCESSABLE_ENTITY, message, code, info)
    this.name = 'HTTPUnprocessableEntityError'
  }
}

export class HTTPLockedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.LOCKED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.LOCKED)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.LOCKED, message, code, info)
    this.name = 'HTTPLockedError'
  }
}

export class HTTPFailedDependencyError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.FAILED_DEPENDENCY}] ${getDefaultStatusCodeMessage(HTTPStatusCode.FAILED_DEPENDENCY)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.FAILED_DEPENDENCY, message, code, info)
    this.name = 'HTTPFailedDependencyError'
  }
}

export class HTTPUnorderedCollectionError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNORDERED_COLLECTION}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNORDERED_COLLECTION)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.UNORDERED_COLLECTION, message, code, info)
    this.name = 'HTTPUnorderedCollectionError'
  }
}

export class HTTPUpgradeRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UPGRADE_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UPGRADE_REQUIRED)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.UPGRADE_REQUIRED, message, code, info)
    this.name = 'HTTPUpgradeRequiredError'
  }
}

export class HTTPPreconditionRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PRECONDITION_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PRECONDITION_REQUIRED)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.PRECONDITION_REQUIRED, message, code, info)
    this.name = 'HTTPPreconditionRequiredError'
  }
}

export class HTTPTooManyRequestsError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.TOO_MANY_REQUESTS}] ${getDefaultStatusCodeMessage(HTTPStatusCode.TOO_MANY_REQUESTS)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.TOO_MANY_REQUESTS, message, code, info)
    this.name = 'HTTPTooManyRequestsError'
  }
}

export class HTTPRequestHeaderFieldsTooLargeError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE, message, code, info)
    this.name = 'HTTPRequestHeaderFieldsTooLargeError'
  }
}

export class HTTPUnavailableForLegalReasonsError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS, message, code, info)
    this.name = 'HTTPUnavailableForLegalReasonsError'
  }
}

export class HTTPInternalServerError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.INTERNAL_SERVER_ERROR}] ${getDefaultStatusCodeMessage(HTTPStatusCode.INTERNAL_SERVER_ERROR)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.INTERNAL_SERVER_ERROR, message, code, info)
    this.name = 'HTTPInternalServerError'
  }
}

export class HTTPNotImplementedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_IMPLEMENTED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_IMPLEMENTED)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.NOT_IMPLEMENTED, message, code, info)
    this.name = 'HTTPNotImplementedError'
  }
}

export class HTTPBadGatewayError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.BAD_GATEWAY}] ${getDefaultStatusCodeMessage(HTTPStatusCode.BAD_GATEWAY)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.BAD_GATEWAY, message, code, info)
    this.name = 'HTTPBadGatewayError'
  }
}

export class HTTPServiceUnavailableError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.SERVICE_UNAVAILABLE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.SERVICE_UNAVAILABLE)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.SERVICE_UNAVAILABLE, message, code, info)
    this.name = 'HTTPServiceUnavailableError'
  }
}

export class HTTPGatewayTimeoutError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.GATEWAY_TIMEOUT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.GATEWAY_TIMEOUT)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.GATEWAY_TIMEOUT, message, code, info)
    this.name = 'HTTPGatewayTimeoutError'
  }
}

export class HTTPHttpVersionNotSupportedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED, message, code, info)
    this.name = 'HTTPHttpVersionNotSupportedError'
  }
}

export class HTTPVariantAlsoNegotiatesError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.VARIANT_ALSO_NEGOTIATES}] ${getDefaultStatusCodeMessage(HTTPStatusCode.VARIANT_ALSO_NEGOTIATES)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.VARIANT_ALSO_NEGOTIATES, message, code, info)
    this.name = 'HTTPVariantAlsoNegotiatesError'
  }
}

export class HTTPInsufficientStorageError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.INSUFFICIENT_STORAGE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.INSUFFICIENT_STORAGE)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.INSUFFICIENT_STORAGE, message, code, info)
    this.name = 'HTTPInsufficientStorageError'
  }
}

export class HTTPLoopDetectedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.LOOP_DETECTED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.LOOP_DETECTED)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.LOOP_DETECTED, message, code, info)
    this.name = 'HTTPLoopDetectedError'
  }
}

export class HTTPBandwidthLimitExceededError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED, message, code, info)
    this.name = 'HTTPBandwidthLimitExceededError'
  }
}

export class HTTPNotExtendedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_EXTENDED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_EXTENDED)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.NOT_EXTENDED, message, code, info)
    this.name = 'HTTPNotExtendedError'
  }
}

export class HTTPNetworkAuthenticationRequireError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE)}`, code?: string, info?: { [key: string]: any }) {
    super(HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE, message, code, info)
    this.name = 'HTTPNetworkAuthenticationRequireError'
  }
}

export { HTTPStatusCode }

