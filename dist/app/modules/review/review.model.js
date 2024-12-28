"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    productName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.Review = (0, mongoose_1.model)('Review', reviewSchema);
