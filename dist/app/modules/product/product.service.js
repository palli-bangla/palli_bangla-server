"use strict";
/* eslint-disable @typescript-eslint/ban-ts-comment */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
// import { IFiltersProps, IPaginationProps, IProduct } from "./product.interface";
const product_model_1 = require("./product.model");
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingProduct = yield product_model_1.Product.findOne({
            name: product.name,
            size: product.size,
        });
        if (existingProduct) {
            throw new ApiError_1.default(http_status_1.default.FOUND, 'Product with the same name and size already exists');
        }
        // Add is_available field based on stock
        product.is_available = product.stock > 0;
        const result = yield product_model_1.Product.create(product);
        console.log(result, 'Product created successfully');
        return result;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find({});
    return result;
});
// const getAllProducts = async (options:IPaginationProps,filters:IFiltersProps):Promise<IGenericResponse<IProduct[]>> => {
//   const { page, limit, skip } = paginationHelpers.calculatePagination(options);
//   const { searchTerm, ...filtersData } = filters;
//   const { sortBy, sortOrder } = options;
//   // const sortBy = options.sortBy || 'name'
//   // const sortOrder = options.sortOrder || 'asc'
// const category = filtersData.category;
// const minPrice = Number(filtersData.minPrice);
// const maxPrice = Number(filtersData.maxPrice);
// const andConditions = [];
// const stringFields = productSearchAbleFields.filter(field => field !== 'price');
// //@ts-ignore
// const numericSearchTerm = !isNaN(parseFloat(searchTerm)) ? parseFloat(searchTerm) : null;
// const priceRange = 1;
// if (searchTerm) {
//   const orConditions = stringFields.map((field) => ({
//     [field]: {
//       $regex: searchTerm,
//       $options: 'i',
//     },
//   }));
//   // Add condition for numeric search in price with a range
//   if (numericSearchTerm !== null) {
//     orConditions.push({ 
//       price: {
//         //@ts-ignore
//         $gte: numericSearchTerm - priceRange,
//         $lte: numericSearchTerm + priceRange
//       } 
//     });
//   }
//   andConditions.push({ $or: orConditions });
// }
// // filtering by min or max price 
// if (!isNaN(minPrice) && !isNaN(maxPrice)) {
//   andConditions.push({
//     price: {
//       $gte: minPrice,
//       $lte: maxPrice,
//     },
//   });
// } else if (!isNaN(minPrice)) {
//   andConditions.push({
//     price: {
//       $gte: minPrice,
//     },
//   });
// } else if (!isNaN(maxPrice)) {
//   andConditions.push({
//     price: {
//       $lte: maxPrice,
//     },
//   });
// }
// if (category) {
//   andConditions.push({ category });
// }
// const whereConditions =
//   andConditions.length > 0 ? { $and: andConditions } : {};
// const sortConditions : {[key:string]:SortOrder} = {};
// if(sortBy && sortOrder){
//   //@ts-ignore
//   sortConditions[sortBy]= sortOrder
// }
// const [data, total] = await Promise.all([
//   Product.find(whereConditions).sort(sortConditions).skip(skip).limit(limit),
//   Product.countDocuments(whereConditions),
// ]);
// return {
//   meta: {
//     page,
//     limit,
//     total,
//     count: data.length
//   },
//   data
// };
// };
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.Product.findById(id);
});
const updateProduct = (id, updatedProduct) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.Product.findByIdAndUpdate(id, updatedProduct, { new: true });
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndDelete(id);
    return result;
});
exports.productService = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
