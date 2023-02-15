import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { thunkDeleteProduct, thunkGetSingleProduct } from "../../store/products"
import OpenModalButton from "../OpenModalButton"
import EditProduct from "../EditProduct"
import AllReviewsComponent from "../AllReviews"
import CreateReview from "../CreateReview"
import { createCartItemThunk } from "../../store/shoppingCartItems"
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
            amount += element.star;
        }

        let avg = amount/arr.length;
        avg = +avg;

        if (avg && typeof avg === 'number') return avg.toFixed(2);
        else if (!avg || typeof avg !== 'number') return "No ratings yet";
    }

    const starFunc = (num) => {
        if (num < 1 || num > 5) return 'No ratings yet';
        else if (num >= 1 && num < 2) return '★☆☆☆☆';
        else if (num >= 2 && num < 3) return '★★☆☆☆';
        else if (num >= 3 && num < 4) return '★★★☆☆';
        else if (num >= 4 && num < 5) return '★★★★☆';
        else if (num === 5) return '★★★★★';
    }

    if (!product) return null
    if (!user) return null

    const deleteButton = (async (e) => {
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
        <div className="main-single-product-container">
            <div className="single-product-container">
                <div className="single-product-image-container">
                    <img className="single-product-image" src={product.imagesUrl}></img>
                </div>
                <div className="single-product-sidebar-container">
                    {user && user.id === product.ownerId &&(
                        <div className="edit-delete-product-buttons">
                            <OpenModalButton
                                buttonText="Edit Product"
                                modalComponent={<EditProduct />}
                                />
                                <button onClick={deleteButton} className="delete-button">Delete Product</button>
                        </div>
                    )}
                    <div className="single-product-information-container">
                        <h1 className="single-product-price">${product.price}</h1>
                        <h3 className="single-product-name">{product.name}</h3>
                        <div>
                            <button onClick={addToCart} className="add-to-cart-button">Add to cart</button>
                        </div>
                        <div>{product.description}</div>
                    </div>
                </div>
            </div>
            <div className="all-reviews-container">
                <div className="all-reviews-header">
                    <h3>{reviews.length} reviews</h3>
                    <div>{starFunc(averageFunc(reviews))}</div>
                    <div className="create-review-button-container">
                    {user && (
                        !reviews.find(review => review.userId === user.id)
                    ) && (
                        <OpenModalButton
                            buttonText="Create Review"
                            modalComponent={<CreateReview productId={productId} />}
                        />
                    )}
                    </div>
                </div>
                <AllReviewsComponent productId={productId} />
            </div>
        </div>
    )
}

export default SingleProduct;
