"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderZodSchema = void 0;
const zod_1 = require("zod");
// ProductOrder schema for validating individual products in an order
const ProductOrderSchema = zod_1.z.object({
    productId: zod_1.z.string().uuid({
        message: 'productId must be a valid ObjectId as a string',
    }),
    quantity: zod_1.z.number().int().positive({
        message: 'Quantity must be a positive integer',
    }),
    priceAtPurchase: zod_1.z.number().positive({
        message: 'Price at purchase must be a positive number',
    }),
});
// Main Order schema
const createOrderZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        customer_name: zod_1.z.string({
            required_error: 'Customer name is required',
        }),
        customerPhone: zod_1.z.string({
            required_error: 'Customer phone is required',
        }),
        address: zod_1.z.string({
            required_error: 'Address is required',
        }),
        products: zod_1.z.array(ProductOrderSchema).min(1, {
            message: 'At least one product is required in the order',
        }),
        totalAmount: zod_1.z.number().positive({
            message: 'Total amount is required and should be a positive number',
        }),
        status: zod_1.z.enum(['Pending', 'Shipped', 'Delivered', 'Cancelled', 'Returned', 'Refunded'], {
            required_error: 'Order status is required',
        }),
        orderDate: zod_1.z.string().refine((val) => !isNaN(Date.parse(val)), {
            message: 'Invalid order date',
        }),
    }),
});
exports.OrderZodSchema = {
    createOrderZodSchema,
};
