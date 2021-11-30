const ErrorResponse = require('../utils/errorResponse');

// 400 - Bad Request, , 404 - Not Found, 500 - Internal Server Error

const errorHandler = (err, req, res, next) => {
  let error = { ...err }, errors = {};

  error.message = err.message;

  // Log to console for dev
  console.log(`${err}`.red);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400);
    Object.entries(err.errors).forEach(([key,{message}])=> errors[key]= message)
    return res.status(400).json({ 
      success: false,
      message: "Validation Error",
      errors 
    })
  }

  // Sequelize Validation Error
  if(err.name === 'SequelizeValidationError'){
    err.errors.forEach(error => errors[error.path] = error.message)
    error = new ErrorResponse(errors, 400);
    return res.status(400).json({ 
      success: false, 
      message: "Validation Error",
      errors 
    })
  }
  if(err.name==="SequelizeUniqueConstraintError"){
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server Error',
    // error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
