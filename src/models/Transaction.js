// models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    // Add other fields as needed
});

module.exports = mongoose.model('Transaction', transactionSchema);
