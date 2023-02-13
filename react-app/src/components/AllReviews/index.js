import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllReviewsThunk } from "../../store/reviews";
import SingleReviewCard from "../SingleReviewCard";
import { cleanUpReviewsAction } from "../../store/reviews";
import './AllReviews.css';

const AllReviewsComponent = ({ productId }) => {
    const dispatch = useDispatch();
    const allReviewsObj = useSelector(state => state.reviews);
    const allReviews = Object.values(allReviewsObj);

    useEffect(() => {
        dispatch(loadAllReviewsThunk(productId));
        return () => dispatch(cleanUpReviewsAction());
    }, [dispatch, productId]);

    if (!allReviews || !allReviewsObj) return null;
    console.log(">>>>>>>>>>>>>>>>>", allReviews)

    return (
        <div className="all-reviews-container">
            {allReviews.map((singleReview) => (
                <SingleReviewCard key={singleReview.id}
                review={singleReview.review}
                // user={singleReview.user.firstName}
                userId={singleReview.userId}
                reviewId={singleReview.id}
                productId={productId}
                time={singleReview.createdAt}
                />
            ))}
        </div>
    )
};

export default AllReviewsComponent;
