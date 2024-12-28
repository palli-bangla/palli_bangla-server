import { z } from 'zod';

 const createProductZodSchema = z.object({
    body: z.object({
      name: z.string({
        required_error: 'name is required',
      }),
      category: z.string({
        required_error: 'category is required',
      }),
      image: z.string({
        required_error: 'image is required',
      }),
      availability: z.boolean({
        required_error: 'availability is required',
      }),
      netWeight: z.string({
        required_error: 'netWeight is required',
      }),
      description: z.string({
        required_error: 'description is required',
      }),
      price: z.number({
        required_error: 'price is required',
      }),
      quantity: z.number({
        required_error: 'quantity is required',
      }),
    }),
  });
export const ProductValidation= {
    createProductZodSchema
}