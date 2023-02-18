import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllReviewsThunk } from "../../store/reviews";
import SingleReviewCard from "../SingleReviewCard";
import { cleanUpReviewsAction } from "../../store/reviews";
import './AllReviews.css';

const AllReviewsComponent = ({ productId }) => {
    const dispatch = useDispatch();
    const allReviewsObj = useSelector(state => state.reviews);
    // const allReviews = Object.values(allReviewsObj);
    const reviewsArr = Object.values(allReviewsObj)

    const reviews = []
    for (const key in reviewsArr[reviewsArr.length -1]){
        reviews.push(reviewsArr[reviewsArr.length -1][key])
    }

    useEffect(() => {
        dispatch(loadAllReviewsThunk(productId));
        return () => dispatch(cleanUpReviewsAction());
    }, [dispatch, productId]);

    if (!reviews || !allReviewsObj) return null;

    return (
        <div className="all-reviews-container">
            {reviews.map((singleReview) => (
                <SingleReviewCard key={singleReview.id}
                review={singleReview.review}
                user={singleReview.firstName}
                userId={singleReview.userId}
                reviewId={singleReview.id}
                productId={productId}
                star={singleReview.star}
                time={singleReview.createdAt}
                />
            ))}
        </div>
    )
};

export default AllReviewsComponent;
