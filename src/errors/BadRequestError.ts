class BadRequestError extends Error {
  status: number;

  constructor(message = 'HTTP 400 Bad Request') {
    super(message);
    this.status = 400;
  }
}

export default BadRequestError;
