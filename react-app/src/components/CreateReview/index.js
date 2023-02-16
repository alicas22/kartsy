import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { thunkCreateProduct } from "../../store/products"
import { useModal } from "../../context/Modal"
import { createReviewThunk } from "../../store/reviews"
import { thunkGetSingleProduct } from "../../store/products"
import { loadAllReviewsThunk } from "../../store/reviews"
import "./CreateReview.css"

const CreateReview = ({ productId }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal();
    const [review, setReview] = useState('')
    const [star, setStar] = useState('')
    const [errors, setErrors] = useState([])
    const [createdReview, setCreatedReview] = useState()

    const user = useSelector(state => state.session.user)


    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            owner_id: user.id,
            review,
            star
        }

        if (!user) return null

        const data =  await dispatch(createReviewThunk(productId, payload))

        if (Array.isArray(data)) {
            setErrors(data);
        } else {
            await setCreatedReview(data)
            closeModal();
        }

        history.push(`/products/${productId}`)
    }

    useEffect(() => {

        return () => dispatch(loadAllReviewsThunk(productId))

    }, [dispatch, productId])

    return (
        <div className="create-review-form">
            <h1>Create Review</h1>
            <form className='review-product-form' onSubmit={handleSubmit}>
                <ul className="validation-errors">
                    {errors.map((error, index) => <li className="errors-text" key={index}>{error}</li>)}
                </ul>
                <label>
                    <p>
                    review
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
                    star
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
                <div className="create-review-submit-button-container">
                    <button className="create-review-submit-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default CreateReview
