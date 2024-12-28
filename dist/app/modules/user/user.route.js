"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
// import auth from "../../middlewares/auth";
// import { ENUM_USER_ROLE } from "../../../enums/user";
const router = (0, express_1.Router)();
router.get('/', user_controller_1.userController.getAllUsers);
router.get('/:id', 
// auth(ENUM_USER_ROLE.USER),
user_controller_1.userController.getSingleUser);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.USER),
user_controller_1.userController.updateUser);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
user_controller_1.userController.deleteUser);
exports.UserRoutes = router;
