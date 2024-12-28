"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = require("zod");
const createProductZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'name is required',
        }),
        category: zod_1.z.string({
            required_error: 'category is required',
        }),
        image: zod_1.z.string({
            required_error: 'image is required',
        }),
        availability: zod_1.z.boolean({
            required_error: 'availability is required',
        }),
        netWeight: zod_1.z.string({
            required_error: 'netWeight is required',
        }),
        description: zod_1.z.string({
            required_error: 'description is required',
        }),
        price: zod_1.z.number({
            required_error: 'price is required',
        }),
        quantity: zod_1.z.number({
            required_error: 'quantity is required',
        }),
    }),
});
exports.ProductValidation = {
    createProductZodSchema
};
