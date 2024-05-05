// src/notFoundHandler.js

// Not found handler middleware
const notFoundHandler = (req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
};

module.exports = notFoundHandler;
