import React from 'react';
import { useEffect } from 'react'
import { thunkGetProducts } from '../../store/products'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const MyProducts = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetProducts())
    }, [dispatch])

    const productsObj = useSelector((state) => state.products.allProducts)
    const user = useSelector((state) => state.session.user)
    if (!productsObj) return null
    if (!user) return <h1 className='search-title'>You shouldn't be on this page unless you sign in</h1>
  
    const myProductsArr = Object.values(productsObj).filter((product) => product.ownerId === user.id);
    if (!myProductsArr) return null
    if (!myProductsArr.length) return <h1 className='search-title'>You currently don't have any products</h1>


    const ProductClick = (e, id) => {
        e.preventDefault()
        history.push(`/products/${id}`)
    }

    return myProductsArr && (
        <>
            <h1 className='search-title'>Your Products:</h1>
            <h4 className='search-title search-subheader'>Click on a product to view details or make changes</h4>
            <div className='all-search-container'>
                <div className='mapped-search-container'>
                    <ul className='all-search'>
                        {myProductsArr.map((result) => {
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



export default MyProducts;
