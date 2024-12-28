import {  Document } from 'mongoose';

export type Product = {
  productId: string;
  size: string;
  quantity: number;
  priceAtPurchase: number;
}

export type IOrder = Document & {
  customer_name: string;
  order_id:string;
  customerPhone: string;
  district: string;
  thana: string;
  address: string;
  delivery_charge: number;
  products: Product[];
  totalAmount: number;
  totalWeight: number;
  order_entry_user:string;
  order_entry_user_number:string;
  order_entry_role:string;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled' | 'Returned' | 'Refunded';
}
