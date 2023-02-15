import { useDispatch, useSelector } from "react-redux";
import { deleteReviewThunk } from "../../store/reviews";
// import { loadSingleSpotThunk } from "../../store/single"; update this line later
import './SingleReviewCard.css';

import EditReview from "../EditReview";
import OpenModalButton from "../OpenModalButton"
import { useHistory } from "react-router-dom";

const SingleReviewCard = ({review, userId, star, reviewId, productId, time, user}) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const currentUser = useSelector(state => state.session.user);

    const timeFormat = (time) => {
        if (time) {
            time = time.slice(0, 16);
            return time
        }
    };

    const deleteReviewHandler = ( async (e) => {
        e.preventDefault()
        await dispatch(deleteReviewThunk(reviewId))
        history.push(`/products/${productId}`)
    })

    if (!review) return null;

    return (
        <div className="single-review-card-container">
            <div className='single-review-header'>
                <div className="delete-review-button-container">
                    {(currentUser && currentUser.id == userId && (
                    <div>
                        <OpenModalButton
                        buttonText="Edit Review"
                        modalComponent={<EditReview productId={productId} reviewId={reviewId}/>}
                        />
                        <button className="delete-review-button" onClick={deleteReviewHandler}>Delete this review</button>
                    </div>
                    ))}

                </div>
            </div>
            <div className="single-review-star">star: {star}</div>
            <div className="single-review-content">{review}</div>
            <div className="single-review-reviewOwner">{user}</div>
            <div className="single-review-createdTime">{timeFormat(time)}</div>
        </div>
    )
};

export default SingleReviewCard;
