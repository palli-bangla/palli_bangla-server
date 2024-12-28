"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const review_model_1 = require("./review.model");
const createReview = (ReviewData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.create(ReviewData);
    return result;
});
const getReviews = () => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield review_model_1.Review.find().populate('userId', 'name email role');
    return reviews;
});
const getSingleReview = (ReviewId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.findById(ReviewId);
    return result;
});
const updateReview = (ReviewId, updatedReviewData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.findByIdAndUpdate(ReviewId, updatedReviewData, { new: true });
    return result;
});
const deleteReview = (ReviewId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.findByIdAndDelete(ReviewId);
    return result;
});
exports.ReviewService = {
    createReview,
    getReviews,
    getSingleReview,
    updateReview,
    deleteReview,
};
