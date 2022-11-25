/* eslint-disable max-classes-per-file */

import SuperError from '@andrewscwei/super-error'
import http from 'http'
import HTTPStatusCode from './enums/HTTPStatusCode'

export function getDefaultStatusCodeMessage(statusCode: HTTPStatusCode) {
  return http.STATUS_CODES[String(statusCode)]
}

export class HTTPError extends SuperError {
  readonly status: number

  constructor(status: number, message?: string, code?: string, info?: Record<string, any>, cause?: Error) {
    super(message, code, info, cause)
    this.status = status
  }

  /**
   * @inheritdoc
   */
  toString(): string {
    return `${this.name}[${this.status}${this.code === undefined ? '' : `/${this.code}`}]: ${this.message}`
  }
}

export class HTTPBadRequestError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.BAD_REQUEST}] ${getDefaultStatusCodeMessage(HTTPStatusCode.BAD_REQUEST)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.BAD_REQUEST, message, code, info, cause)
  }
}

export class HTTPUnauthorizedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNAUTHORIZED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNAUTHORIZED)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.UNAUTHORIZED, message, code, info, cause)
  }
}

export class HTTPPaymentRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PAYMENT_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PAYMENT_REQUIRED)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.PAYMENT_REQUIRED, message, code, info, cause)
  }
}

export class HTTPForbiddenError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.FORBIDDEN}] ${getDefaultStatusCodeMessage(HTTPStatusCode.FORBIDDEN)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.FORBIDDEN, message, code, info, cause)
  }
}

export class HTTPNotFoundError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_FOUND}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_FOUND)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.NOT_FOUND, message, code, info, cause)
  }
}

export class HTTPMethodNotAllowedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.METHOD_NOT_ALLOWED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.METHOD_NOT_ALLOWED)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.METHOD_NOT_ALLOWED, message, code, info, cause)
  }
}

export class HTTPNotAcceptableError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_ACCEPTABLE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_ACCEPTABLE)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.NOT_ACCEPTABLE, message, code, info, cause)
  }
}

export class HTTPProxyAuthenticationRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED, message, code, info, cause)
  }
}

export class HTTPRequestTimeoutError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.REQUEST_TIMEOUT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.REQUEST_TIMEOUT)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.REQUEST_TIMEOUT, message, code, info, cause)
  }
}

export class HTTPConflictError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.CONFLICT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.CONFLICT)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.CONFLICT, message, code, info, cause)
  }
}

export class HTTPGoneError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.GONE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.GONE)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.GONE, message, code, info, cause)
  }
}

export class HTTPLengthRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.LENGTH_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.LENGTH_REQUIRED)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.LENGTH_REQUIRED, message, code, info, cause)
  }
}

export class HTTPPreconditionFailedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PRECONDITION_FAILED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PRECONDITION_FAILED)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.PRECONDITION_FAILED, message, code, info, cause)
  }
}

export class HTTPPayloadTooLargeError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PAYLOAD_TOO_LARGE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PAYLOAD_TOO_LARGE)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.PAYLOAD_TOO_LARGE, message, code, info, cause)
  }
}

export class HTTPUriTooLongError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.URI_TOO_LONG}] ${getDefaultStatusCodeMessage(HTTPStatusCode.URI_TOO_LONG)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.URI_TOO_LONG, message, code, info, cause)
  }
}

export class HTTPUnsupportedMediaTypeError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE, message, code, info, cause)
  }
}

export class HTTPRangeNotSatisfiableError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.RANGE_NOT_SATISFIABLE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.RANGE_NOT_SATISFIABLE)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.RANGE_NOT_SATISFIABLE, message, code, info, cause)
  }
}

export class HTTPExpectationFailedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.EXPECTATION_FAILED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.EXPECTATION_FAILED)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.EXPECTATION_FAILED, message, code, info, cause)
  }
}

export class HTTPImATeapotError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.IM_A_TEAPOT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.IM_A_TEAPOT)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.IM_A_TEAPOT, message, code, info, cause)
  }
}

export class HTTPMisdirectedRequestError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.MISDIRECTED_REQUEST}] ${getDefaultStatusCodeMessage(HTTPStatusCode.MISDIRECTED_REQUEST)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.MISDIRECTED_REQUEST, message, code, info, cause)
  }
}

export class HTTPUnprocessableEntityError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNPROCESSABLE_ENTITY}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNPROCESSABLE_ENTITY)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.UNPROCESSABLE_ENTITY, message, code, info, cause)
  }
}

export class HTTPLockedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.LOCKED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.LOCKED)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.LOCKED, message, code, info, cause)
  }
}

export class HTTPFailedDependencyError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.FAILED_DEPENDENCY}] ${getDefaultStatusCodeMessage(HTTPStatusCode.FAILED_DEPENDENCY)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.FAILED_DEPENDENCY, message, code, info, cause)
  }
}

export class HTTPUnorderedCollectionError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNORDERED_COLLECTION}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNORDERED_COLLECTION)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.UNORDERED_COLLECTION, message, code, info, cause)
  }
}

export class HTTPUpgradeRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UPGRADE_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UPGRADE_REQUIRED)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.UPGRADE_REQUIRED, message, code, info, cause)
  }
}

export class HTTPPreconditionRequiredError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.PRECONDITION_REQUIRED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.PRECONDITION_REQUIRED)}`, code?: string, info?: Record<string, any>) {
    super(HTTPStatusCode.PRECONDITION_REQUIRED, message, code, info)
  }
}

export class HTTPTooManyRequestsError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.TOO_MANY_REQUESTS}] ${getDefaultStatusCodeMessage(HTTPStatusCode.TOO_MANY_REQUESTS)}`, code?: string, info?: Record<string, any>) {
    super(HTTPStatusCode.TOO_MANY_REQUESTS, message, code, info)
  }
}

export class HTTPRequestHeaderFieldsTooLargeError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE, message, code, info, cause)
  }
}

export class HTTPUnavailableForLegalReasonsError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS}] ${getDefaultStatusCodeMessage(HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS, message, code, info, cause)
  }
}

export class HTTPInternalServerError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.INTERNAL_SERVER_ERROR}] ${getDefaultStatusCodeMessage(HTTPStatusCode.INTERNAL_SERVER_ERROR)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.INTERNAL_SERVER_ERROR, message, code, info, cause)
  }
}

export class HTTPNotImplementedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_IMPLEMENTED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_IMPLEMENTED)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.NOT_IMPLEMENTED, message, code, info, cause)
  }
}

export class HTTPBadGatewayError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.BAD_GATEWAY}] ${getDefaultStatusCodeMessage(HTTPStatusCode.BAD_GATEWAY)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.BAD_GATEWAY, message, code, info, cause)
  }
}

export class HTTPServiceUnavailableError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.SERVICE_UNAVAILABLE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.SERVICE_UNAVAILABLE)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.SERVICE_UNAVAILABLE, message, code, info, cause)
  }
}

export class HTTPGatewayTimeoutError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.GATEWAY_TIMEOUT}] ${getDefaultStatusCodeMessage(HTTPStatusCode.GATEWAY_TIMEOUT)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.GATEWAY_TIMEOUT, message, code, info, cause)
  }
}

export class HTTPHttpVersionNotSupportedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED, message, code, info, cause)
  }
}

export class HTTPVariantAlsoNegotiatesError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.VARIANT_ALSO_NEGOTIATES}] ${getDefaultStatusCodeMessage(HTTPStatusCode.VARIANT_ALSO_NEGOTIATES)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.VARIANT_ALSO_NEGOTIATES, message, code, info, cause)
  }
}

export class HTTPInsufficientStorageError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.INSUFFICIENT_STORAGE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.INSUFFICIENT_STORAGE)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.INSUFFICIENT_STORAGE, message, code, info, cause)
  }
}

export class HTTPLoopDetectedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.LOOP_DETECTED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.LOOP_DETECTED)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.LOOP_DETECTED, message, code, info, cause)
  }
}

export class HTTPBandwidthLimitExceededError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED, message, code, info, cause)
  }
}

export class HTTPNotExtendedError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NOT_EXTENDED}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NOT_EXTENDED)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.NOT_EXTENDED, message, code, info, cause)
  }
}

export class HTTPNetworkAuthenticationRequireError extends HTTPError {
  constructor(message = `[${HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE}] ${getDefaultStatusCodeMessage(HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE)}`, code?: string, info?: Record<string, any>, cause?: Error) {
    super(HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE, message, code, info, cause)
  }
}

export { HTTPStatusCode }
