import { Types } from "mongoose";


export type IReview ={
    id?:string;
    userName:string;
    rating:string;
    title:string;
    productName:string;
    userEmail:string;
    userId: Types.ObjectId;
    comment:string;
}