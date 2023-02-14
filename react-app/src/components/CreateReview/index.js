import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { thunkCreateProduct } from "../../store/products"
import { useModal } from "../../context/Modal"
import { createReviewThunk } from "../../store/reviews"
import { thunkGetSingleProduct } from "../../store/products"
import { loadAllReviewsThunk } from "../../store/reviews"

const CreateReview = ({ productId }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal();
    const [review, setReview] = useState('')
    const [star, setStar] = useState('')
    const [errors, setErrors] = useState([])
    const [createdReview, setCreatedReview] = useState()

    const user = useSelector(state => state.session.user)
    //console.log('user', user)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            owner_id: user.id,
            review,
            star
        }

        if (!user) return null

        await dispatch(createReviewThunk(productId, payload))
            .then((review) => {
                setCreatedReview(review)
            })
            .then(closeModal)
            // .catch(
            //     async (res) => {
            //         const data = await res.json();
            //         if (data && (data.errors)) setErrors(data.errors)
            //     });

        history.push(`/products/${productId}`)
    }

    useEffect(() => {
        // if (createdReview) {
        //     history.push(`/products/${productId}`)
        // }
        dispatch(loadAllReviewsThunk(productId))
        return () => dispatch(thunkGetSingleProduct(productId));
        // dispatch(thunkGetSingleProduct(productId))
    }, [productId])

    return (
        <div className="create-review-form">
            <h1>Create Review</h1>
            <form className='review-product-form' onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, index) => <li className="errors-text" key={index}>{error}</li>)}
                </ul>
                <label>
                    <p>
                    review
                    </p>
                    <input
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
                        value={star}
                        onChange={(e) => setStar(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default CreateReview
