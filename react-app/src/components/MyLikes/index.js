import React from 'react';
import { useEffect } from 'react'
import { thunkGetProducts } from '../../store/products'
import { thunkLoadAllLikes } from '../../store/like'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const MyLikes = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetProducts())
        dispatch(thunkLoadAllLikes())
    }, [dispatch])

    //select needed objects from state
    const productsObj = useSelector((state) => state.products.allProducts)
    const user = useSelector((state) => state.session.user)
    const likesObj = useSelector((state) => state.likes.allLikes)

    //return null so page isn't blank
    if (!productsObj || !likesObj) return null

    //filter logged in user's likes
    const myLikesArr = Object.values(likesObj).filter((like) => like.userId === user.id);

    //create array of user's likes and filter the products array based on whether the product id is included in the likes prod id array
    let likedProductsArr = []
    myLikesArr.forEach((like)=> likedProductsArr.push(like.productId))
    const productsArr = Object.values(productsObj).filter((product) => likedProductsArr.includes(product.id))

    if (!myLikesArr) return null
    if (!myLikesArr.length) return <h1 className='search-title'>You currently don't have any favorited products</h1>

    //navigate to single product page if click on liked product
    const ProductClick = (e, id) => {
        e.preventDefault()
        history.push(`/products/${id}`)
    }
    return (
        <>
        <h1 className='search-title'>Your Favorites:</h1>
        <h4 className='search-title search-subheader'>Click on a product to view details and add to cart</h4>
        <div className='all-search-container'>
            <div className='mapped-search-container'>
                <ul className='all-search'>
                    {productsArr.map((result) => {
                        return (
                            <div className='search-card' key={result.id} onClick={(e) => ProductClick(e, result.id)}>
                                <div className='search-image-container'>
                                    <img className='search-image' src={result.imagesUrl} alt='product'></img>
                                </div>
                                <div className = 'search-name-container'>
                                    {result.name}
                                </div>
                                <div className='search-price-container'>
                                    ${result.price.toFixed(2)}
                                </div>
                            </div>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    </>
    )
}
export default MyLikes
