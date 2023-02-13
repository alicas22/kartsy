import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { thunkDeleteProduct, thunkGetSingleProduct } from "../../store/products"
import OpenModalButton from "../OpenModalButton"
import EditProduct from "../EditProduct"
import AllReviewsComponent from "../AllReviews"
import CreateReview from "../CreateReview"
import EditReview from "../EditReview"


const SingleProduct = () => {
    const history = useHistory()
    const { productId } = useParams()
    const dispatch = useDispatch()
    console.log(productId)
    useEffect(() => {
        dispatch(thunkGetSingleProduct(productId))
    }, [dispatch, productId])

    const product = useSelector((state) => state.products.singleProduct)
    const user = useSelector((state) => state.session.user)


    if (!product) return null

    const deleteButton = ( async (e) => {
        e.preventDefault()
        await dispatch(thunkDeleteProduct(product))
        history.push('/products')
    })

    return (
        <div>
            <div>{product.name}</div>
            {user && (
                <div className="create-product-modal">
                    <OpenModalButton
                        buttonText="Edit Product"
                        modalComponent={<EditProduct />}
                    />
                    <OpenModalButton
                        buttonText="Create Review"
                        modalComponent={<CreateReview productId={productId} />}
                    />
                    <OpenModalButton
                        buttonText="Edit Review"
                        modalComponent={<EditReview productId={productId}/>}
                    />
                    <div>
                        <button onClick={deleteButton} className="delete-button">
                            Delete
                        </button>
                    </div>
                </div>
            )}
            <AllReviewsComponent productId={productId}/>
        </div>
    )
}

export default SingleProduct
