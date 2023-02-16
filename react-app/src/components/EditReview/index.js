import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { thunkEditProduct } from "../../store/products"
import { useModal } from "../../context/Modal"
import SingleProduct from "../SingleProduct"
import { thunkGetSingleProduct } from "../../store/products"
import { updateReviewThunk } from "../../store/reviews"
import "./EditReview.css"


const EditReview = ({ productId, reviewId }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const editReview = useSelector((state) => state.reviews[reviewId])

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

    return (
        <div className="edit-review-form">
            <h1>Edit Review</h1>
            <form className='edit-review-form' onSubmit={handleSubmit}>
                <ul className="validation-errors">
                    {errors.map((error, index) => <li className="errors-text" key={index}>{error}</li>)}
                </ul>
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
                </label>
                <button className= "edit-review-submit-button" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default EditReview
