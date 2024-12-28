"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoutes = void 0;
const express_1 = require("express");
const payment_controller_1 = require("./payment.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const payment_validation_1 = require("./payment.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const router = (0, express_1.Router)();
router.post('/create-payment-intent', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), (0, validateRequest_1.default)(payment_validation_1.paymentZodSchema.createPaymentZodSchema), payment_controller_1.paymentController.paymentIntent);
router.post('/create-payment', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), payment_controller_1.paymentController.createPayment);
router.get('/:email', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), payment_controller_1.paymentController.getPayments);
exports.PaymentRoutes = router;
