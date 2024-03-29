import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { thunkDeleteProduct, thunkGetSingleProduct, cleanUpSingleProductAction } from "../../store/products"
import { thunkDeleteLike, thunkLoadAllLikes, thunkPostLike } from "../../store/like"
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
        dispatch(thunkLoadAllLikes())
        return () => dispatch(cleanUpSingleProductAction());
    }, [dispatch, productId])

    const product = useSelector((state) => state.products.singleProduct)
    const user = useSelector((state) => state.session.user)
    const reviewsObj = useSelector((state) => state.reviews)
    const likes = useSelector((state) => state.likes.allLikes)

    if (!reviewsObj || !likes) return null

    const reviewsArr = Object.values(reviewsObj)
    const likesArr = Object.values(likes)
    if (!reviewsArr) return null

    // essentially keying into state.reviews.productReviews in a non-intuitive way
    // because useSelector isnt working the way we need it to
    const reviews = []
    for (const key in reviewsArr[reviewsArr.length -1]){
        reviews.push(reviewsArr[reviewsArr.length -1][key])
    }

    // set liked to true or false to display red heart or empty heart
    let isLiked = false;
    let likeId;

    // check if like is in all likes array
    const filteredLikes = likesArr.filter(like => ((like.userId === user.id) && like.productId === +productId))
    if (filteredLikes.length > 0) {
        isLiked = true
        likeId = likesArr.filter(like => (like.userId === user.id && like.productId === +productId))[0].id
    }


    if (!product) return null


    let cart_item;
    if (user) {
        cart_item={
            productId:product.id,
            userId: user.id,
            countOfProduct:1
        }
    }

    const addToCart = async (e) =>{
        e.preventDefault()
        await dispatch(createCartItemThunk(cart_item))
        history.push('/cart')
    }

    const deleteButton = (async (e) => {
        e.preventDefault()
        await dispatch(thunkDeleteProduct(product))
        history.push('/')
    })

    // function to like a photo
    const likePhoto = () => {
        dispatch(thunkPostLike(productId, user.id))
    }
    // function to remove a like
    const removeLike = () => {
        dispatch(thunkDeleteLike(likeId))
        isLiked = false
    }

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

    return (
        <div className="biggest-container">
            <div className="main-single-product-container">
                <div className="single-product-container">
                    <div className="single-product-image-container">
                        <img className="single-product-image" src={product.imagesUrl} onError={e => { e.currentTarget.src = "https://www.aepint.nl/wp-content/uploads/2014/12/No_image_available.jpg"; }}></img>
                        {isLiked === false && (
                            <button className='single-photo-like-button' onClick={likePhoto}><i className="fa-regular fa-heart" style={{color: "gray"}}></i></button>
                        )}
                        {isLiked === true && (
                            <button className='single-photo-like-button' onClick={removeLike}><i className="fa-solid fa-heart heart-liked-color"></i></button>
                        )}
                    </div>
                    <div className="single-product-sidebar-container">
                        {user && user.id === product.ownerId &&(
                            <div className="edit-delete-product-buttons">
                                <div className="edit-product-button">
                                    <OpenModalButton
                                        buttonText="Edit Product"
                                        modalComponent={<EditProduct />}
                                    />
                                </div>
                                <button onClick={deleteButton} className="delete-product-button">Delete Product</button>
                            </div>
                        )}
                        <div className="single-product-information-container">
                            <h1 className="single-product-price">${product.price.toFixed(2)}</h1>
                            <h3 className="single-product-name">{product.name}</h3>
                            <div className="add-to-cart-button-container">
                                {!user && (
                                    <button className="add-to-cart-button-logged-out" disabled={true}>Sign in to add to cart</button>
                                )}
                                {user && user.id !== product.ownerId && (
                                    <button onClick={addToCart} className="add-to-cart-button">Add to cart</button>
                                )}
                                {user && user.id === product.ownerId && (
                                    <button className="add-to-cart-button-logged-out" disabled={true}>Can't purchase your own product</button>
                                )}
                            </div>
                            <div className="single-product-description-container">
                                <div className="single-product-description-header">Description:</div>
                                <p className="single-product-description">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-reviews-area-container">
                    <div className="all-reviews-header">
                        <h3>{reviews.length} reviews</h3>
                        <div>{starFunc(averageFunc(reviews))}</div>
                        <div className="create-review-button-container">
                        {user && user.id !== product.ownerId && (
                            !reviews.find(review => review.userId === user.id)
                        ) && (
                            <div className="create-review-button">
                                <OpenModalButton
                                    buttonText="Create Review"
                                    modalComponent={<CreateReview productId={productId} />}
                                />
                            </div>
                        )}
                        </div>
                    </div>
                    <div>
                        <AllReviewsComponent productId={productId} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleProduct;
