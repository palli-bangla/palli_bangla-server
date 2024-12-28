"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentZodSchema = void 0;
const zod_1 = require("zod");
const createPaymentZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        price: zod_1.z.number({
            required_error: 'price is required',
        })
    }),
});
exports.paymentZodSchema = {
    createPaymentZodSchema
};
