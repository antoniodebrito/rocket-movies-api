class AppError {
  message;
  statusCode;

  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;

    console.log(message, statusCode);
  }
}

module.exports = AppError;