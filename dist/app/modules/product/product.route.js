"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
// import validateRequest from '../../middlewares/validateRequest';
// import { ProductValidation } from './product.validation';
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const router = (0, express_1.Router)();
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
// validateRequest(ProductValidation.createProductZodSchema),
product_controller_1.productController.createProduct);
router.get('/', 
// auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.USER),
product_controller_1.productController.getAllProducts);
router.get('/:id', 
// auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.USER),
product_controller_1.productController.getProductById);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), product_controller_1.productController.updateProduct);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), product_controller_1.productController.deleteProduct);
exports.ProductRoutes = router;
