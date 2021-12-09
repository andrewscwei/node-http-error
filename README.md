# node-http-error [![npm](https://img.shields.io/npm/v/@andrewscwei/http-error.svg)](https://www.npmjs.com/package/@andrewscwei/http-error) [![CI](https://github.com/andrewscwei/node-http-error/workflows/CI/badge.svg)](https://github.com/andrewscwei/node-http-error/actions?query=workflow%3ACI) [![CD](https://github.com/andrewscwei/node-http-error/workflows/CD/badge.svg)](https://github.com/andrewscwei/node-http-error/actions?query=workflow%3ACD)

Custom HTTP errors with status codes for Node.js, extends [`SuperError`](https://www.npmjs.com/package/@andrewscwei/super-error).

## API

- `HTTPError` — Generic HTTP error
- `HTTPBadRequestError` — `HTTPError` with status `400`
- `HTTPUnauthorizedError` — `HTTPError` with status `401`
- `HTTPPaymentRequiredError` — `HTTPError` with status `402`
- `HTTPForbiddenError` — `HTTPError` with status `403`
- `HTTPNotFoundError` — `HTTPError` with status `404`
- `HTTPMethodNotAllowedError` — `HTTPError` with status `405`
- `HTTPNotAcceptableError` — `HTTPError` with status `406`
- `HTTPProxyAuthenticationRequiredError` — `HTTPError` with status `407`
- `HTTPRequestTimeoutError` — `HTTPError` with status `408`
- `HTTPConflictError` — `HTTPError` with status `409`
- `HTTPGoneError` — `HTTPError` with status `410`
- `HTTPLengthRequiredError` — `HTTPError` with status `411`
- `HTTPPreconditionFailedError` — `HTTPError` with status `412`
- `HTTPPayloadTooLargeError` — `HTTPError` with status `413`
- `HTTPUriTooLongError` — `HTTPError` with status `414`
- `HTTPUnsupportedMediaTypeError` — `HTTPError` with status `415`
- `HTTPRangeNotSatisfiableError` — `HTTPError` with status `416`
- `HTTPExpectationFailedError` — `HTTPError` with status `417`
- `HTTPImATeapotError` — `HTTPError` with status `418`
- `HTTPMisdirectedRequestError` — `HTTPError` with status `421`
- `HTTPUnprocessableEntityError` — `HTTPError` with status `422`
- `HTTPLockedError` — `HTTPError` with status `423`
- `HTTPFailedDependencyError` — `HTTPError` with status `424`
- `HTTPUnorderedCollectionError` — `HTTPError` with status `425`
- `HTTPUpgradeRequiredError` — `HTTPError` with status `426`
- `HTTPPreconditionRequiredError` — `HTTPError` with status `428`
- `HTTPTooManyRequestsError` — `HTTPError` with status `429`
- `HTTPRequestHeaderFieldsTooLargeError` — `HTTPError` with status `431`
- `HTTPUnavailableForLegalReasonsError` — `HTTPError` with status `451`
- `HTTPInternalServerError` — `HTTPError` with status `500`
- `HTTPNotImplementedError` — `HTTPError` with status `501`
- `HTTPBadGatewayError` — `HTTPError` with status `502`
- `HTTPServiceUnavailableError` — `HTTPError` with status `503`
- `HTTPGatewayTimeoutError` — `HTTPError` with status `504`
- `HTTPHttpVersionNotSupportedError` — `HTTPError` with status `505`
- `HTTPVariantAlsoNegotiatesError` — `HTTPError` with status `506`
- `HTTPInsufficientStorageError` — `HTTPError` with status `507`
- `HTTPLoopDetectedError` — `HTTPError` with status `508`
- `HTTPBandwidthLimitExceededError` — `HTTPError` with status `509`
- `HTTPNotExtendedError` — `HTTPError` with status `510`
- `HTTPNetworkAuthenticationRequireError` — `HTTPError` with status `511`
