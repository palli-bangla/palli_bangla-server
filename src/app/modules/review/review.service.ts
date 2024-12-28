import { IReview } from "./review.interfece";
import { Review } from "./review.model";


const createReview = async (ReviewData:IReview) : Promise<IReview> => {
    const result = await Review.create(ReviewData);
    return result
}

const getReviews = async (): Promise<IReview[] | null> => {
    const reviews = await Review.find().populate('userId', 'name email role');
    return reviews;
  }

const getSingleReview = async (ReviewId:string) : Promise<IReview | null> => {
    const result = await Review.findById(ReviewId);
    return result
}

const updateReview = async (ReviewId:string, updatedReviewData:Partial<IReview>) : Promise<IReview | null> => {
 
    const result = await Review.findByIdAndUpdate(ReviewId, updatedReviewData, { new: true });
    return result;
}

const deleteReview = async (ReviewId:string) => {
    const result = await Review.findByIdAndDelete(ReviewId);
    return result
}





export const ReviewService = {
    createReview,
    getReviews,
    getSingleReview,
    updateReview,
    deleteReview,
}