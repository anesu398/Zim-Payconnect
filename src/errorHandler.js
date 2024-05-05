// src/errorHandler.js

// Centralized error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Default to 500 Internal Server Error if status code is not set
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

    res.status(statusCode).json({
        status: 'error',
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack // Hide stack trace in production
    });
};

module.exports = errorHandler;
