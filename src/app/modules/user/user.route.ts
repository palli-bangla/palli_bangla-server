import { Router } from "express";
import { userController } from "./user.controller";
// import auth from "../../middlewares/auth";
// import { ENUM_USER_ROLE } from "../../../enums/user";

const router = Router();

router.get('/', userController.getAllUsers);


router.get('/:id',
    // auth(ENUM_USER_ROLE.USER),
    userController.getSingleUser);

router.patch('/:id',
    // auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.USER),
    userController.updateUser);

router.delete('/:id',
    // auth(ENUM_USER_ROLE.ADMIN),
    userController.deleteUser);

export const UserRoutes = router;