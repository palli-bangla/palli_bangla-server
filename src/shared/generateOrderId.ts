import Order from '../app/modules/order/order.model';

const generateOrderId = async (): Promise<string> => {
  const baseOrderId = 20241;

  try {
    const lastOrder = await Order.findOne({}, { order_id: 1 })
      .sort({ order_id: -1 })
      .exec();

    let newOrderId;

    if (lastOrder) {
      const lastOrderId = parseInt(lastOrder.order_id, 10);
      newOrderId = lastOrderId + 1;
    } else {
      newOrderId = baseOrderId;
    }

    const exists = await Order.findOne({
      order_id: newOrderId.toString(),
    }).exec();
    if (exists) {
      return generateOrderId();
    }

    return newOrderId.toString();
  } catch (error) {
    console.error('Error generating order ID:', error);
    throw new Error('Could not generate a unique order ID');
  }
};

export default generateOrderId;
