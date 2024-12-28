"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const order_service_1 = require("./order.service");
const pick_1 = __importDefault(require("../../../shared/pick"));
const order_constants_1 = require("./order.constants");
const createOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Order = req.body;
    const result = yield order_service_1.OrderService.createOrder(Order);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Order created successfully!',
        data: result,
    });
}));
const getOrders = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = (0, pick_1.default)(req.query, ['sortBy', 'sortOrder', 'page', 'limit']);
    const filters = (0, pick_1.default)(req.query, order_constants_1.orderSearchAbleFields);
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
    const result = yield order_service_1.OrderService.getOrders();
    const message = (result === null || result === void 0 ? void 0 : result.length) === 0 ? "This user does not have any Order" : 'Order Retrived successfully!';
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message,
        data: result,
    });
}));
const getSingleOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const OrderId = req.params.id;
    const result = yield order_service_1.OrderService.getSingleOrder(OrderId);
    const message = result === null ? "This user does not have any Order" : 'Single Order Retrived successfully!';
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message,
        data: result,
    });
}));
const updateOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const OrderId = req.params.id;
    const updatedOrderData = req.body;
    const result = yield order_service_1.OrderService.updateOrder(OrderId, updatedOrderData);
    const message = result === null ? "This user does not have any Order" : 'Order Updated successfully!';
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message,
        data: result,
    });
}));
const deleteOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const OrderId = req.params.id;
    const result = yield order_service_1.OrderService.deleteOrder(OrderId);
    console.log(result, " controller dd");
    const message = result === null ? "This user does not have any Order" : 'Order deleted successfully!';
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message,
        data: result,
    });
}));
exports.OrderController = {
    createOrder,
    getOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder
};
