import React from 'react';
import { useEffect } from 'react'
import { thunkGetProducts } from '../../store/products'
import { loadAllProductReviewsThunk } from '../../store/reviews'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const MyReviews = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetProducts())
        dispatch(loadAllProductReviewsThunk())
    }, [dispatch])

    const productsObj = useSelector((state) => state.products.allProducts)
    const reviewsObj = useSelector((state) => state.reviews.allReviews)
    const user = useSelector((state) => state.session.user)
    if (!productsObj) return null
    if (!reviewsObj) return null
    if (!user) return <h1 className='search-title'>You shouldn't be on this page unless you sign in</h1>

    const productsArr = Object.values(productsObj)
    const myReviewsArr = Object.values(reviewsObj).filter((review) => review.userId === user.id);

    const productsWithReviewsArr = productsArr.filter((product) => {
        return myReviewsArr.some((review) => review.productId === product.id)
      })


    if (!myReviewsArr) return null
    if (!myReviewsArr.length) return <h1 className='search-title'>You currently don't have any reviews</h1>


    const ProductClick = (e, id) => {
        e.preventDefault()
        history.push(`/products/${id}`)
    }

    return myReviewsArr && (
        <>
            <h1 className='search-title'>Your Reviews:</h1>
            <h4 className='search-title search-subheader'>Click on a product to view details or make changes to your review</h4>
            <div className='all-search-container'>
                <div className='mapped-search-container'>
                    <ul className='all-search'>
                        {productsWithReviewsArr.map((result) => {
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
                                    {myReviewsArr.filter((review) => review.productId === result.id).map((review) => {
                                        return (
                                            <div>
                                                <br/>
                                                {review.review}
                                            </div>
                                        )}
                                    )}
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



export default MyReviews;
