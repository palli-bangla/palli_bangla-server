import { Schema, model } from 'mongoose';
import { IReview } from './review.interfece';



const reviewSchema = new Schema<IReview>(
  {
   
    productName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    title: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Review = model<IReview>('Review', reviewSchema);