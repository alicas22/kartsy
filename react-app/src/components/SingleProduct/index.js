import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { thunkDeleteProduct, thunkGetSingleProduct } from "../../store/products"
import OpenModalButton from "../OpenModalButton"
import EditProduct from "../EditProduct"
import AllReviewsComponent from "../AllReviews"
import CreateReview from "../CreateReview"
import EditReview from "../EditReview"
import './SingleProduct.css'


const SingleProduct = () => {
    const history = useHistory()
    const { productId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetSingleProduct(productId))
    }, [dispatch, productId])

    const product = useSelector((state) => state.products.singleProduct)
    const reviewsObj = useSelector((state) => state.reviews)
    const reviews = Object.values(reviewsObj)

    const user = useSelector((state) => state.session.user)

    const averageFunc = (arr) =>{
        let amount = 0;

        for(let element of arr){
            amount+= element.star
        }
        const avg = amount/arr.length
        return avg.toFixed(2)
    }


    if (!product) return null

    const deleteButton = (async (e) => {
        e.preventDefault()
        await dispatch(thunkDeleteProduct(product))
        history.push('/products')
    })

    return (
        <div className="main-singleProduct-container">
            <div className="image-review-container">
            <div className="single-image-container">
                <img className="single-image" src={product.imagesUrl}></img>
            </div>
            <div>
                <div>{reviews.length} reviews</div>
                <div>{averageFunc(reviews)}</div>
            </div>
            <div className="all-reviews-box">
                {user && (
                    !reviews.find(review => review.userId === user.id)
                ) && (
                    <OpenModalButton
                        buttonText="Create Review"
                        modalComponent={<CreateReview productId={productId} />}
                    />
                )}
                <AllReviewsComponent productId={productId} />
            </div>
            </div>
            <div className="main-reviews-button-container">
                <div className="Edit-create-delete-top-buttons">
                    {user && user.id === product.ownerId &&(
                        <div className="create-product-modal">
                            <OpenModalButton
                                buttonText="Edit Product"
                                modalComponent={<EditProduct />}
                                />
                            <div>
                                <button onClick={deleteButton} className="delete-button">
                                    Delete
                                </button>
                            </div>
                        </div>
                    )}
                    <div>{product.name}</div>
                    <div>${product.price}</div>
                    <div>{product.description}</div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
