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
exports.OrderService = void 0;
const generateOrderId_1 = __importDefault(require("../../../shared/generateOrderId"));
const order_model_1 = __importDefault(require("./order.model"));
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderId = yield (0, generateOrderId_1.default)();
        orderData.order_id = orderId;
        const result = yield order_model_1.default.create(orderData);
        return result;
    }
    catch (error) {
        console.error('Error creating order:', error);
        throw new Error('Could not create the order');
    }
});
const getOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.find();
    return result;
});
const getSingleOrder = (OrderId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.findById(OrderId);
    return result;
});
const updateOrder = (OrderId, updatedOrderData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.findByIdAndUpdate(OrderId, updatedOrderData, {
        new: true,
    });
    return result;
});
const deleteOrder = (OrderId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.findByIdAndDelete(OrderId);
    return result;
});
exports.OrderService = {
    createOrder,
    getOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder,
};
