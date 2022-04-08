const { ERROR_MESSAGES } = require('./helpers');

const errorController = (err, _req, res, _next) => {
  const isValidationError = Object.prototype.hasOwnProperty.call(ERROR_MESSAGES, err);
  
  if (isValidationError) {
    const { code, message } = ERROR_MESSAGES[err];

    return res.status(code).json({ message });
  }

  return res.status(500).json({ message: 'Server Error' });
};

module.exports = errorController;