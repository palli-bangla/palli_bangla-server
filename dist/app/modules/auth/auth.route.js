"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_validation_1 = require("./auth.validation");
const router = (0, express_1.Router)();
router.post('/signup', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.createUserZodSchema), auth_controller_1.authController.createUser);
router.patch('/change-password', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.changePassWordZodSchema), auth_controller_1.authController.changePAssword);
router.post('/login', 
// validateRequest(AuthValidation.loginUserZodSchema),
auth_controller_1.authController.logInUser);
router.post('/refresh-token', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.refreshTokenZodSchema), auth_controller_1.authController.refreshToken);
exports.AuthRoutes = router;
