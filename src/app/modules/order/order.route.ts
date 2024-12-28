import { Router } from "express";
import { OrderController } from "./order.controller";
// import validateRequest from "../../middlewares/validateRequest";
// import { OrderZodSchema } from "./order.validation";
// import auth from "../../middlewares/auth";
// import { ENUM_USER_ROLE } from "../../../enums/user";


const router = Router();

router.post('/create',
// auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
// validateRequest(OrderZodSchema.createOrderZodSchema),
OrderController.createOrder);

router.get('/', 
// auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
OrderController.getOrders);

router.get('/:id',
// auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
OrderController.getSingleOrder);

router.patch('/:id',
// auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
OrderController.updateOrder);

router.delete('/:id',
// auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
OrderController.deleteOrder);


export const OrderRoutes = router;