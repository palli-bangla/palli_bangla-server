/* eslint-disable @typescript-eslint/ban-ts-comment */

import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import {  IProduct } from "./product.interface";
// import { IFiltersProps, IPaginationProps, IProduct } from "./product.interface";
import { Product } from "./product.model";




const createProduct = async (product: IProduct): Promise<IProduct> => {
  try {
    const existingProduct = await Product.findOne({
      name: product.name,
      size: product.size,
    });

    if (existingProduct) {
      throw new ApiError(httpStatus.FOUND, 'Product with the same name and size already exists');
    }

    // Add is_available field based on stock
    product.is_available = product.stock > 0;

    const result = await Product.create(product);
    console.log(result, 'Product created successfully');
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



const getAllProducts = async()=> {
  const result = await Product.find({});
  return result; 
}


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

const getProductById = async (id: string): Promise<IProduct | null> => {
  return await Product.findById(id);
};




const updateProduct = async (id: string, updatedProduct: IProduct): Promise<IProduct | null> => {
  return await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const productService = {
    createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
