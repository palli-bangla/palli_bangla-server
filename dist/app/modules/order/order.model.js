"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    productId: { type: String, required: true },
    size: { type: String, required: true },
    quantity: { type: Number, required: true },
    priceAtPurchase: { type: Number, required: true },
});
const OrderSchema = new mongoose_1.Schema({
    order_id: { type: String, required: true },
    customer_name: { type: String, required: true },
    customerPhone: { type: String, required: true },
    order_entry_user: { type: String, required: true },
    order_entry_user_number: { type: String, required: true },
    order_entry_role: { type: String, required: true },
    district: { type: String, required: true },
    thana: { type: String, required: true },
    address: { type: String, required: true },
    delivery_charge: { type: Number, required: true },
    products: { type: [ProductSchema], required: true },
    totalAmount: { type: Number, required: true },
    totalWeight: { type: Number, required: true },
    status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled', 'Returned', 'Refunded'],
        default: 'Pending',
    },
}, { timestamps: true });
const Order = (0, mongoose_1.model)('Order', OrderSchema);
exports.default = Order;
