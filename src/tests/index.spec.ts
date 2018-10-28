import assert from 'assert';
import { describe, it } from 'mocha';
import HTTPStatusCode from '../enums/HTTPStatusCode';
import { HTTPAuthenticationError, HTTPClientError, HTTPNotFoundError, HTTPServerError } from '../index';

describe('node-http-error', () => {
  it('can throw HTTPServerError', () => {
    const error = new HTTPServerError('There is a server error');
    assert(error.status === HTTPStatusCode.SERVER_ERROR);
    assert.throws(() => { throw error; });
  });

  it('can throw HTTPClientError', () => {
    const error = new HTTPClientError('There is a server error');
    assert(error.status === HTTPStatusCode.CLIENT_ERROR);
    assert.throws(() => { throw error; });
  });

  it('can throw HTTPAuthenticationError', () => {
    const error = new HTTPAuthenticationError('There is a server error');
    assert(error.status === HTTPStatusCode.AUTHENTICATION_ERROR);
    assert.throws(() => { throw error; });
  });

  it('can throw HTTPNotFoundError', () => {
    const error = new HTTPNotFoundError('There is a server error');
    assert(error.status === HTTPStatusCode.NOT_FOUND);
    assert.throws(() => { throw error; });
  });
});
