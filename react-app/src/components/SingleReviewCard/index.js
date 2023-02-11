import { useDispatch, useSelector } from "react-redux";
import { deleteReviewThunk, updateReviewThunk } from "../../store/reviews";
// import { loadSingleSpotThunk } from "../../store/single"; update this line later
import './SingleReviewCard.css';

const SingleReviewCard = ({review, user, reviewOwnerId, reviewId, productId, time}) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

    const timeFormat = (time) => {
        if (time) {
            time = time.slice(0, 10);
            return time
        }
    };

    const updateReviewHandler = async (e) => {
        e.preventDefault();
        await dispatch(updateReviewThunk(review));
    };

    const deleteReviewHandler = async (e) => {
        e.preventDefault();
        await dispatch(deleteReviewThunk(reviewId));
        // dispatch(loadSingleSpotThunk(spotId))
    };

    if (!review) return null;

    return (
        <div className="single-review-card-container">
            <div className='single-review-header'>
                <div className="single-review-reviewOwner">{user}</div>
                <div className="delete-review-button-container">
                {(currentUser && currentUser.id === reviewOwnerId) && (
                    <div>
                        <button className="edit-review-button" onClick={updateReviewHandler}>Edit this review</button>
                        <button className="delete-review-button" onClick={deleteReviewHandler}>Delete this review</button>
                    </div>
                )}
                </div>
            </div>
            <div className="single-review-createdTime">{timeFormat(time)}</div>
            <div className="single-review-content">{review}</div>
        </div>
    )
};

export default SingleReviewCard;
