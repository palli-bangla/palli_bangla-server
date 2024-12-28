import { RequestHandler } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { OrderService } from "./order.service";
import { IOrder } from "./order.interfece";
import pick from "../../../shared/pick";
import { orderSearchAbleFields } from "./order.constants";


const createOrder: RequestHandler = catchAsync(async (req, res) => {
    const Order = req.body;
    const result = await OrderService.createOrder(Order);
    sendResponse<IOrder>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  });

const getOrders: RequestHandler = catchAsync(async (req, res) => {

  const options = pick(req.query, ['sortBy', 'sortOrder', 'page', 'limit']);
  const filters = pick(req.query,orderSearchAbleFields);
  
  
    // orderId: ObjectId;       
    // quantity: number;           
    // priceAtPurchase: number;    
    // customer_name: string;   
    // customerPhone: string;      
    // address: string;           
    // products: ProductOrder[];  
    // totalAmount: number;        
    // status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled' | 'Returned' | 'Refunded';
    // orderDate: Date;           
  




    const result = await OrderService.getOrders();
    const message = result?.length === 0 ? "This user does not have any Order" : 'Order Retrived successfully!';
    sendResponse<IOrder[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

const getSingleOrder: RequestHandler = catchAsync(async (req, res) => {
    const OrderId = req.params.id
    const result = await OrderService.getSingleOrder(OrderId);
    const message = result === null ? "This user does not have any Order" : 'Single Order Retrived successfully!';
    sendResponse<IOrder>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

const updateOrder: RequestHandler = catchAsync(async (req, res) => {
    const OrderId = req.params.id;
    const updatedOrderData = req.body;
    const result = await OrderService.updateOrder(OrderId,updatedOrderData);
    const message = result === null ? "This user does not have any Order" : 'Order Updated successfully!';
    sendResponse<IOrder>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

const deleteOrder: RequestHandler = catchAsync(async (req, res) => {
    const OrderId = req.params.id;
    const result = await OrderService.deleteOrder(OrderId);
    console.log(result," controller dd");
    const message = result === null ? "This user does not have any Order" : 'Order deleted successfully!';
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

  export const OrderController = {
    createOrder,
    getOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder
  }