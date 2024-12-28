import { Schema, model } from 'mongoose';
import { IOrder, Product } from './order.interfece';


const ProductSchema = new Schema<Product>({
  productId: { type: String, required: true },
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
  priceAtPurchase: { type: Number, required: true },
});


const OrderSchema = new Schema<IOrder>({
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


const Order = model<IOrder>('Order', OrderSchema);

export default Order;
