"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewZodSchema = void 0;
const zod_1 = require("zod");
const createReviewZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userName: zod_1.z.string({
            required_error: 'userName is required',
        }),
        productName: zod_1.z.string({
            required_error: 'productName is required',
        }),
        userEmail: zod_1.z.string({
            required_error: 'userEmail is required',
        }),
        title: zod_1.z.string({
            required_error: 'title is required',
        }),
        userId: zod_1.z.string({
            required_error: 'userId is required',
        }),
        rating: zod_1.z.number({
            required_error: 'rating is required',
        }),
        comment: zod_1.z.string({
            required_error: 'comment is required',
        })
    }),
});
exports.reviewZodSchema = {
    createReviewZodSchema
};
