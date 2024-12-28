import { Router } from "express";
import { ReviewController } from "./review.controller";
import { reviewZodSchema } from "./review.validation";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = Router();

router.post('/create',
auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.USER),
validateRequest(reviewZodSchema.createReviewZodSchema),
ReviewController.createReview);

router.get('/',auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.USER), ReviewController.getReviews);


router.get('/:id',auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.USER), ReviewController.getSingleReview);

router.patch('/:id',auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.USER), ReviewController.updateReview);

router.delete('/:id',auth(ENUM_USER_ROLE.ADMIN), ReviewController.deleteReview);


export const ReviewRoutes = router;