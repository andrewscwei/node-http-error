import assert from 'assert';
import { describe, it } from 'mocha';
import { HTTPBadGatewayError, HTTPBadRequestError, HTTPBandwidthLimitExceededError, HTTPConflictError, HTTPExpectationFailedError, HTTPFailedDependencyError, HTTPForbiddenError, HTTPGatewayTimeoutError, HTTPGoneError, HTTPHttpVersionNotSupportedError, HTTPImATeapotError, HTTPInsufficientStorageError, HTTPInternalServerError, HTTPLengthRequiredError, HTTPLockedError, HTTPLoopDetectedError, HTTPMethodNotAllowedError, HTTPMisdirectedRequestError, HTTPNetworkAuthenticationRequireError, HTTPNotAcceptableError, HTTPNotExtendedError, HTTPNotFoundError, HTTPNotImplementedError, HTTPPayloadTooLargeError, HTTPPaymentRequiredError, HTTPPreconditionFailedError, HTTPPreconditionRequiredError, HTTPProxyAuthenticationRequiredError, HTTPRangeNotSatisfiableError, HTTPRequestHeaderFieldsTooLargeError, HTTPRequestTimeoutError, HTTPServiceUnavailableError, HTTPTooManyRequestsError, HTTPUnauthorizedError, HTTPUnavailableForLegalReasonsError, HTTPUnorderedCollectionError, HTTPUnprocessableEntityError, HTTPUnsupportedMediaTypeError, HTTPUpgradeRequiredError, HTTPUriTooLongError, HTTPVariantAlsoNegotiatesError } from '..';
import HTTPStatusCode from '../enums/HTTPStatusCode';

describe('node-http-error', () => {
  it('can throw an HTTPBadRequestError error', () => {
    const error = new HTTPBadRequestError();
    assert(error.status === HTTPStatusCode.BAD_REQUEST);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPUnauthorizedError error', () => {
    const error = new HTTPUnauthorizedError();
    assert(error.status === HTTPStatusCode.UNAUTHORIZED);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPPaymentRequiredError error', () => {
    const error = new HTTPPaymentRequiredError();
    assert(error.status === HTTPStatusCode.PAYMENT_REQUIRED);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPForbiddenError error', () => {
    const error = new HTTPForbiddenError();
    assert(error.status === HTTPStatusCode.FORBIDDEN);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPNotFoundError error', () => {
    const error = new HTTPNotFoundError();
    assert(error.status === HTTPStatusCode.NOT_FOUND);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPMethodNotAllowedError error', () => {
    const error = new HTTPMethodNotAllowedError();
    assert(error.status === HTTPStatusCode.METHOD_NOT_ALLOWED);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPNotAcceptableError error', () => {
    const error = new HTTPNotAcceptableError();
    assert(error.status === HTTPStatusCode.NOT_ACCEPTABLE);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPProxyAuthenticationRequiredError error', () => {
    const error = new HTTPProxyAuthenticationRequiredError();
    assert(error.status === HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPRequestTimeoutError error', () => {
    const error = new HTTPRequestTimeoutError();
    assert(error.status === HTTPStatusCode.REQUEST_TIMEOUT);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPConflictError error', () => {
    const error = new HTTPConflictError();
    assert(error.status === HTTPStatusCode.CONFLICT);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPGoneError error', () => {
    const error = new HTTPGoneError();
    assert(error.status === HTTPStatusCode.GONE);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPLengthRequiredError error', () => {
    const error = new HTTPLengthRequiredError();
    assert(error.status === HTTPStatusCode.LENGTH_REQUIRED);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPPreconditionFailedError error', () => {
    const error = new HTTPPreconditionFailedError();
    assert(error.status === HTTPStatusCode.PRECONDITION_FAILED);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPPayloadTooLargeError error', () => {
    const error = new HTTPPayloadTooLargeError();
    assert(error.status === HTTPStatusCode.PAYLOAD_TOO_LARGE);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPUriTooLongError error', () => {
    const error = new HTTPUriTooLongError();
    assert(error.status === HTTPStatusCode.URI_TOO_LONG);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPUnsupportedMediaTypeError error', () => {
    const error = new HTTPUnsupportedMediaTypeError();
    assert(error.status === HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPRangeNotSatisfiableError error', () => {
    const error = new HTTPRangeNotSatisfiableError();
    assert(error.status === HTTPStatusCode.RANGE_NOT_SATISFIABLE);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPExpectationFailedError error', () => {
    const error = new HTTPExpectationFailedError();
    assert(error.status === HTTPStatusCode.EXPECTATION_FAILED);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPImATeapotError error', () => {
    const error = new HTTPImATeapotError();
    assert(error.status === HTTPStatusCode.IM_A_TEAPOT);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPMisdirectedRequestError error', () => {
    const error = new HTTPMisdirectedRequestError();
    assert(error.status === HTTPStatusCode.MISDIRECTED_REQUEST);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPUnprocessableEntityError error', () => {
    const error = new HTTPUnprocessableEntityError();
    assert(error.status === HTTPStatusCode.UNPROCESSABLE_ENTITY);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPLockedError error', () => {
    const error = new HTTPLockedError();
    assert(error.status === HTTPStatusCode.LOCKED);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPFailedDependencyError error', () => {
    const error = new HTTPFailedDependencyError();
    assert(error.status === HTTPStatusCode.FAILED_DEPENDENCY);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPUnorderedCollectionError error', () => {
    const error = new HTTPUnorderedCollectionError();
    assert(error.status === HTTPStatusCode.UNORDERED_COLLECTION);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPUpgradeRequiredError error', () => {
    const error = new HTTPUpgradeRequiredError();
    assert(error.status === HTTPStatusCode.UPGRADE_REQUIRED);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPPreconditionRequiredError error', () => {
    const error = new HTTPPreconditionRequiredError();
    assert(error.status === HTTPStatusCode.PRECONDITION_REQUIRED);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPTooManyRequestsError error', () => {
    const error = new HTTPTooManyRequestsError();
    assert(error.status === HTTPStatusCode.TOO_MANY_REQUESTS);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPRequestHeaderFieldsTooLargeError error', () => {
    const error = new HTTPRequestHeaderFieldsTooLargeError();
    assert(error.status === HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPUnavailableForLegalReasonsError error', () => {
    const error = new HTTPUnavailableForLegalReasonsError();
    assert(error.status === HTTPStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPInternalServerError error', () => {
    const error = new HTTPInternalServerError();
    assert(error.status === HTTPStatusCode.INTERNAL_SERVER_ERROR);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPNotImplementedError error', () => {
    const error = new HTTPNotImplementedError();
    assert(error.status === HTTPStatusCode.NOT_IMPLEMENTED);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPBadGatewayError error', () => {
    const error = new HTTPBadGatewayError();
    assert(error.status === HTTPStatusCode.BAD_GATEWAY);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPServiceUnavailableError error', () => {
    const error = new HTTPServiceUnavailableError();
    assert(error.status === HTTPStatusCode.SERVICE_UNAVAILABLE);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPGatewayTimeoutError error', () => {
    const error = new HTTPGatewayTimeoutError();
    assert(error.status === HTTPStatusCode.GATEWAY_TIMEOUT);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPHttpVersionNotSupportedError error', () => {
    const error = new HTTPHttpVersionNotSupportedError();
    assert(error.status === HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPVariantAlsoNegotiatesError error', () => {
    const error = new HTTPVariantAlsoNegotiatesError();
    assert(error.status === HTTPStatusCode.VARIANT_ALSO_NEGOTIATES);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPInsufficientStorageError error', () => {
    const error = new HTTPInsufficientStorageError();
    assert(error.status === HTTPStatusCode.INSUFFICIENT_STORAGE);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPLoopDetectedError error', () => {
    const error = new HTTPLoopDetectedError();
    assert(error.status === HTTPStatusCode.LOOP_DETECTED);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPBandwidthLimitExceededError error', () => {
    const error = new HTTPBandwidthLimitExceededError();
    assert(error.status === HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPNotExtendedError error', () => {
    const error = new HTTPNotExtendedError();
    assert(error.status === HTTPStatusCode.NOT_EXTENDED);
    assert.throws(() => { throw error; });
  });

  it('can throw an HTTPNetworkAuthenticationRequireError error', () => {
    const error = new HTTPNetworkAuthenticationRequireError();
    assert(error.status === HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRE);
    assert.throws(() => { throw error; });
  });
});
