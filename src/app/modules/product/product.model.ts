import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';


const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    is_available: {
      type: Boolean,
    },
    
  },
  { timestamps: true }
);

export const Product = model<IProduct>('Product', productSchema);
