import { z } from 'zod';


  
const createReviewZodSchema = z.object({
  body: z.object({
    userName: z.string({
      required_error: 'userName is required',
    }),
    productName: z.string({
      required_error: 'productName is required',
    }),
    userEmail: z.string({
      required_error: 'userEmail is required',
    }),
    title: z.string({
      required_error: 'title is required',
    }),
    userId: z.string({
      required_error: 'userId is required',
    }),
    rating: z.number({
      required_error: 'rating is required',
    }),
    comment: z.string({
      required_error: 'comment is required',
    })
  }),
});

export const reviewZodSchema = {
    createReviewZodSchema
}