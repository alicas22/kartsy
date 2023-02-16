const LOAD_ALL_REVIEWS = 'reviews/LOAD';
const CREATE_REVIEW = 'review/CREATE';
const UPDATE_REVIEW = 'review/UPDATE';
const DELETE_REVIEW = 'review/DELETE';
const CLEAN_UP_REVIEWS = 'reviews/CLEANUP';

//action creators
export const loadAllReviewsAction = (reviews, productId) => {
    return {
        type: LOAD_ALL_REVIEWS,
        productId,
        reviews
    }
};

export const createReviewAction = (productId, newReview) => {
    return {
        type: CREATE_REVIEW,
        productId,
        newReview
    }
};

export const updateReviewAction = (updatedReview) => {
    return {
        type: UPDATE_REVIEW,
        updatedReview
    }
};

export const deleteReviewAction = (badReviewId) => {
    return {
        type: DELETE_REVIEW,
        badReviewId
    }
};

export const cleanUpReviewsAction = () => {
    return {
        type: CLEAN_UP_REVIEWS
    }
};

//thunks
export const loadAllReviewsThunk = (productId) => async dispatch => {
    const response = await fetch(`/api/products/${productId}/reviews`);
    console.log('response', response)

    if (response.ok) {
        const allReviews = await response.json();
        dispatch(loadAllReviewsAction(productId, allReviews));
        return allReviews;
    }
};

export const createReviewThunk = (productId, newReview) => async dispatch => {
    const response = await fetch(`/api/products/${productId}/reviews`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newReview),
    });

    if (response.ok) {
        const createdReview = await response.json()
        dispatch(createReviewAction(createdReview))
        return createdReview;
    } else if (response.status < 500) {
        const createdReview = await response.json()
        if (createdReview.errors) {
			return createdReview.errors;
		}
    } else {
        return ["An error occurred. Please try again."];
    }

};

export const updateReviewThunk = (review) => async dispatch => {
    const response = await fetch(`/api/reviews/${review.id}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(review),
    });

    if (response.ok) {
        const updatedReview = await response.json()
        dispatch(createReviewAction(updatedReview))
        return updatedReview;
    } else if (response.status < 500) {
        const updatedReview = await response.json()
        if (updatedReview.errors) {
			return updatedReview.errors;
		}
    } else {
        return ["An error occurred. Please try again."];
    }



    // if (response.ok) {
    //     const updatedReview = await response.json();
    //     dispatch(updateReviewAction(updatedReview));
    //     return updatedReview;
    // }
};

export const deleteReviewThunk = (badReviewId) => async dispatch => {
    const response = await fetch(`/api/reviews/${badReviewId}`, {
      method: "DELETE"
    });

    if (response.ok) {
        const badReview = await response.json();
        dispatch(deleteReviewAction(badReviewId));
        return badReview;
    }
};

//reviews reducer
const initialState = {};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL_REVIEWS: {
            const newState = { ...state };
            action.productId.forEach((review) => {
                newState[review.id] = review;
            });
            return newState;
        };
        case CREATE_REVIEW: {
            const newState = { ...state };
            newState[action.productId.id] = action.productId;
            return newState;
        };
        case UPDATE_REVIEW: {
            const newState = { ...state };
            console.log('!!!!!!!!!!!!', action)
            newState[action.updatedReview.id] = action.updatedReview;
            return newState;
        };
        case DELETE_REVIEW: {
            const newState = { ...state };
            console.log("this is the action: ", action)
            delete newState[action.badReviewId];
            return newState;
        };
        case CLEAN_UP_REVIEWS: {
            const newState = { ...initialState };
            return newState;
        }
        default:
            return state;
    }
};

export default reviewsReducer;
