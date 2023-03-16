import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { useModal } from "../../context/Modal"
import { loadAllReviewsThunk } from "../../store/reviews"
import { updateReviewThunk } from "../../store/reviews"
import "./EditReview.css"


const EditReview = ({ productId, reviewId }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const editReview = useSelector((state) => state.reviews.productReviews[reviewId])

    const { closeModal } = useModal();
    const [review, setReview] = useState(editReview.review)
    const [star, setStar] = useState(editReview.star)
    const [errors, setErrors] = useState([])

    const user = useSelector(state => state.session.user)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            ...editReview,
            review,
            star
        }

        if (!user) return null

        const data = await dispatch(updateReviewThunk(payload))
        if (Array.isArray(data)) {
            setErrors(data);
        } else {
            await setReview(data)
            history.push(`/products/${productId}`)
            closeModal();
        }

    }

    useEffect(() => {

        return () => dispatch(loadAllReviewsThunk(productId))

    }, [dispatch, productId])

    return (
        <div className="edit-review-form">
            <h1>Edit Review</h1>
            <form className='edit-review-form' onSubmit={handleSubmit}>
                {/* <ul className="validation-errors">
                    {errors.map((error, index) => <li className="errors-text" key={index}>{error}</li>)}
                </ul> */}
                <label>
                    <p>
                        Review
                    </p>
                    <textarea
                        id="review"
                        type="text"
                        name="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                    <div className='validation-errors'>
                        {errors.filter((error) => error.includes('review')).length > 0 ? errors.filter((error) => error.includes('review'))[0].split(': ')[1] : ''}
                    </div>
                </label>
                <label>
                    <p>
                        Star
                    </p>
                    <input
                        id="star"
                        type="number"
                        name="star"
                        min="1"
                        max="5"
                        value={star}
                        onChange={(e) => setStar(e.target.value)}
                    />
                    <div className='validation-errors'>
                        {errors.filter((error) => error.includes('star')).length > 0 ? errors.filter((error) => error.includes('star'))[0].split(': ')[1] : ''}
                    </div>
                </label>
                <div className="edit-review-submit-button-container">
                    <button className="edit-review-submit-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default EditReview
