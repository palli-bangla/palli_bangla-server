import { Router } from "express";
import { paymentController } from "./payment.controller";
import validateRequest from "../../middlewares/validateRequest";
import { paymentZodSchema } from "./payment.validation";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";


const router = Router();

router.post('/create-payment-intent',
auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
validateRequest(paymentZodSchema.createPaymentZodSchema),
paymentController.paymentIntent);

router.post('/create-payment',
auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
paymentController.createPayment);

router.get('/:email',
auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
paymentController.getPayments);


export const PaymentRoutes = router;