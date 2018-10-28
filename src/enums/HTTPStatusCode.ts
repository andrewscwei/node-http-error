/**
 * Server response status enum.
 */
enum HTTPStatusCode {
  /**
   * Everything went well.
   */
  OK = 200,

  /**
   * No errors but also no content.
   */
  NO_CONTENT = 204,

  /**
   * There is an error on the client's side.
   */
  CLIENT_ERROR = 400,

  /**
   * There is an (internal) error on the server's side.
   */
  SERVER_ERROR = 500,

  /**
   * Error due to authentication.
   */
  AUTHENTICATION_ERROR = 401,

  /**
   * Requested resource not found.
   */
  NOT_FOUND = 404,
}

export default HTTPStatusCode;
