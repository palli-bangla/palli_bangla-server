import { RequestHandler } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IReview } from "./review.interfece";
import { ReviewService } from "./review.service";


const createReview: RequestHandler = catchAsync(async (req, res) => {
    const Review = req.body;
    const result = await ReviewService.createReview(Review);
    sendResponse<IReview>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review created successfully!',
      data: result,
    });
  });

const getReviews: RequestHandler = catchAsync(async (req, res) => {
    const result = await ReviewService.getReviews();
    console.log(result, 'all bokings');
    const message = result?.length === 0 ? "This user does not have any Review" : 'Review Retrived successfully!';
    sendResponse<IReview[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

const getSingleReview: RequestHandler = catchAsync(async (req, res) => {
    const ReviewId = req.params.id
    const result = await ReviewService.getSingleReview(ReviewId);
    const message = result === null ? "This user does not have any Review" : 'Single Review Retrived successfully!';
    sendResponse<IReview>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

const updateReview: RequestHandler = catchAsync(async (req, res) => {
    const ReviewId = req.params.id;
    const updatedReviewData = req.body;
    const result = await ReviewService.updateReview(ReviewId,updatedReviewData);
    const message = result === null ? "This user does not have any Review" : 'Review Updated successfully!';
    sendResponse<IReview>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

const deleteReview: RequestHandler = catchAsync(async (req, res) => {
    const ReviewId = req.params.id;
    const result = await ReviewService.deleteReview(ReviewId);
    const message = result === null ? "This user does not have any Review" : 'Review deleted successfully!';
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

  export const ReviewController = {
    createReview,
    getReviews,
    getSingleReview,
    updateReview,
    deleteReview
  }