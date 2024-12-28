"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
// import validateRequest from "../../middlewares/validateRequest";
// import { OrderZodSchema } from "./order.validation";
// import auth from "../../middlewares/auth";
// import { ENUM_USER_ROLE } from "../../../enums/user";
const router = (0, express_1.Router)();
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
// validateRequest(OrderZodSchema.createOrderZodSchema),
order_controller_1.OrderController.createOrder);
router.get('/', 
// auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
order_controller_1.OrderController.getOrders);
router.get('/:id', 
// auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
order_controller_1.OrderController.getSingleOrder);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
order_controller_1.OrderController.updateOrder);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
order_controller_1.OrderController.deleteOrder);
exports.OrderRoutes = router;
