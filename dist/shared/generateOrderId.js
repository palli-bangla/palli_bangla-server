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
const order_model_1 = __importDefault(require("../app/modules/order/order.model"));
const generateOrderId = () => __awaiter(void 0, void 0, void 0, function* () {
    const baseOrderId = 20241;
    try {
        const lastOrder = yield order_model_1.default.findOne({}, { order_id: 1 })
            .sort({ order_id: -1 })
            .exec();
        let newOrderId;
        if (lastOrder) {
            const lastOrderId = parseInt(lastOrder.order_id, 10);
            newOrderId = lastOrderId + 1;
        }
        else {
            newOrderId = baseOrderId;
        }
        const exists = yield order_model_1.default.findOne({
            order_id: newOrderId.toString(),
        }).exec();
        if (exists) {
            return generateOrderId();
        }
        return newOrderId.toString();
    }
    catch (error) {
        console.error('Error generating order ID:', error);
        throw new Error('Could not generate a unique order ID');
    }
});
exports.default = generateOrderId;
