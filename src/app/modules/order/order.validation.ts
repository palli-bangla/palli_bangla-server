import { z } from 'zod';

// ProductOrder schema for validating individual products in an order
const ProductOrderSchema = z.object({
  productId: z.string().uuid({
    message: 'productId must be a valid ObjectId as a string',
  }), // Assuming productId is a string representation of ObjectId
  quantity: z.number().int().positive({
    message: 'Quantity must be a positive integer',
  }),
  priceAtPurchase: z.number().positive({
    message: 'Price at purchase must be a positive number',
  }),
});

// Main Order schema
const createOrderZodSchema = z.object({
  body: z.object({
    customer_name: z.string({
      required_error: 'Customer name is required',
    }),
    customerPhone: z.string({
      required_error: 'Customer phone is required',
    }),
    address: z.string({
      required_error: 'Address is required',
    }),
    products: z.array(ProductOrderSchema).min(1, {
      message: 'At least one product is required in the order',
    }),
    totalAmount: z.number().positive({
      message: 'Total amount is required and should be a positive number',
    }),
    status: z.enum(['Pending', 'Shipped', 'Delivered', 'Cancelled', 'Returned', 'Refunded'], {
      required_error: 'Order status is required',
    }),
    orderDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: 'Invalid order date',
    }),
  }),
});

export const OrderZodSchema = {
  createOrderZodSchema,
};
