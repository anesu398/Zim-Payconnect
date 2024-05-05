// src/controllers/transactionController.js

const Transaction = require('../models/Transaction');

// Get transactions with pagination
exports.getTransactions = async (req, res) => {
    try {
        const { page, limit, skip } = req.pagination;

        const total = await Transaction.countDocuments();
        const totalPages = Math.ceil(total / limit);

        const transactions = await Transaction.find()
            .skip(skip)
            .limit(limit)
            .exec();

        res.json({
            page,
            totalPages,
            transactions
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
