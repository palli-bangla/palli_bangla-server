import { ObjectId } from "mongodb";

export type IProduct = {
  _id?: ObjectId;     
  name: string;       
  size: string;       
  price: number;      
  category: string;   
  stock: number;
  is_available?:boolean;
}
  


export type IPaginationProps ={
    sortBy?: string;
    sortOrder?: string;
    page?:number;
    limit?:number;
}

export type IFiltersProps = {
  searchTerm?: string;
  minPrice?: number;
  maxPrice?: number;
  category?: string;
}
