// src/routes/transactionRoutes.js

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { verifyToken } = require('../authMiddleware');
const { paginateResults } = require('../paginationMiddleware');
const transactionController = require('../controllers/transactionController');

// Validation middleware
const validateTransaction = [
    // Validate input fields
    check('amount').isNumeric().withMessage('Amount must be a number'),
    check('currency').isLength({ min: 1 }).withMessage('Currency is required'),

    // Sanitize input fields
    check('amount').toFloat(),
    check('currency').trim(),

    // Handle errors
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Create transaction route with validation and authentication middleware
router.post('/', validateTransaction, verifyToken, transactionController.createTransaction);

// Get transactions route with pagination middleware
router.get('/', paginateResults, transactionController.getTransactions);

module.exports = router;
