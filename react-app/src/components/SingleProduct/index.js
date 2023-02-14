import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { thunkDeleteProduct, thunkGetSingleProduct } from "../../store/products"
import OpenModalButton from "../OpenModalButton"
import EditProduct from "../EditProduct"
import AllReviewsComponent from "../AllReviews"
import CreateReview from "../CreateReview"
import { createCartItemThunk } from "../../store/shoppingCartItems"


const SingleProduct = () => {
    const history = useHistory()
    const { productId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetSingleProduct(productId))
    }, [dispatch, productId])

    const product = useSelector((state) => state.products.singleProduct)
    const user = useSelector((state) => state.session.user)

    if (!product) return null
    if (!user) return null

    const deleteButton = ( async (e) => {
        e.preventDefault()
        await dispatch(thunkDeleteProduct(product))
        history.push('/products')
    })

    const cart_item={
        productId:product.id,
        userId: user.id,
        countOfProduct:1
    }
    const addToCart = async (e) =>{
        e.preventDefault()
        await dispatch(createCartItemThunk(cart_item))
        history.push('/cart')
    }

    return (
        <div>
            <div>{product.name}</div>
            <div>
                <img src={product.imagesUrl} alt = '' />
                </div>
            {user && (
                <div className="create-product-modal">
                    <OpenModalButton
                        buttonText="Edit Product"
                        modalComponent={<EditProduct />}
                    />
                    <OpenModalButton
                        buttonText="Create Review"
                        modalComponent={<CreateReview />}
                    />
                    <div>
                        <button onClick={deleteButton} className="delete-button">
                            Delete
                        </button>
                    </div>
                    <div>
                        <button onClick={addToCart} className="add-to-cart-button">
                            Add to cart
                        </button>
                    </div>
                </div>
            )}
            <AllReviewsComponent productId={productId}/>
        </div>
    )
}

export default SingleProduct
