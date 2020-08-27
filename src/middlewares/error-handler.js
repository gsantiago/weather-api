function errorHandler (err, req, res, next) {
  console.error(err.stack)

  const { statusCode = 500, message } = err

  res.status(statusCode).json({
    statusCode,
    message,
    ...(process.env.NODE_ENV === 'development'
      ? {
          error: err,
          stack: err.stack
        }
      : {})
  })
}

module.exports = { errorHandler }
