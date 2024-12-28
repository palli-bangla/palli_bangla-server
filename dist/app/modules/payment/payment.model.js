"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = require("mongoose");
const paymentSchema = new mongoose_1.Schema({
    email: { type: String },
    userName: { type: String },
    price: { type: Number, required: true },
    transactionId: { type: String, required: true },
    date: { type: Date, required: true },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed', 'refunded'],
        required: true,
    },
}, { timestamps: true });
exports.Payment = (0, mongoose_1.model)('Payment', paymentSchema);
