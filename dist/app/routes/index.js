"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const order_route_1 = require("../modules/order/order.route");
const payment_route_1 = require("../modules/payment/payment.route");
const product_route_1 = require("../modules/product/product.route");
const review_route_1 = require("../modules/review/review.route");
const user_route_1 = require("../modules/user/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes
    },
    {
        path: '/user',
        route: user_route_1.UserRoutes
    },
    {
        path: '/product',
        route: product_route_1.ProductRoutes
    },
    {
        path: '/order',
        route: order_route_1.OrderRoutes
    },
    {
        path: '/review',
        route: review_route_1.ReviewRoutes
    },
    {
        path: '/payment',
        route: payment_route_1.PaymentRoutes
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
