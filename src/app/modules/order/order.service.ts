import generateOrderId from '../../../shared/generateOrderId';
import { IOrder } from './order.interfece';
import Order from './order.model';

const createOrder = async (orderData: IOrder): Promise<IOrder> => {
  try {
    const orderId = await generateOrderId();
    orderData.order_id = orderId;
    const result = await Order.create(orderData);
    return result;
  } catch (error) {
    console.error('Error creating order:', error);
    throw new Error('Could not create the order');
  }
};

const getOrders = async (): Promise<IOrder[] | null> => {
  const result = await Order.find();
  return result;
};

const getSingleOrder = async (OrderId: string): Promise<IOrder | null> => {
  const result = await Order.findById(OrderId);
  return result;
};

const updateOrder = async (
  OrderId: string,
  updatedOrderData: Partial<IOrder>
): Promise<IOrder | null> => {
  const result = await Order.findByIdAndUpdate(OrderId, updatedOrderData, {
    new: true,
  });
  return result;
};

const deleteOrder = async (OrderId: string) => {
  const result = await Order.findByIdAndDelete(OrderId);
  return result;
};

export const OrderService = {
  createOrder,
  getOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder,
};
