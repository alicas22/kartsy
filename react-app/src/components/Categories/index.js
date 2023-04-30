import React from 'react';
import { useEffect } from 'react'
import { thunkGetProducts } from '../../store/products'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const Categories = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { categoryId } = useParams()

    useEffect(() => {
        dispatch(thunkGetProducts())
    }, [dispatch])

    const categories = {
        1:'Art',
        2:'Clothing',
        3:'Electronics',
        4:'Gifts',
        5:'Home',
        6:'Toys'
    }

    const productsObj = useSelector((state) => state.products.allProducts)
    // const user = useSelector((state) => state.session.user)

    if (!productsObj) return null
    // if (!user) return <h1 className='search-title'>You shouldn't be on this page unless you sign in</h1>
    const productsCategoryArr = Object.values(productsObj).filter((product) => product.categoryId === +categoryId);
    if (!productsCategoryArr) return null
    if (!productsCategoryArr.length) return <h1 className='search-title'>No products in this category</h1>


    const ProductClick = (e, id) => {
        e.preventDefault()
        history.push(`/products/${id}`)
    }

    return productsCategoryArr && (
        <>
            <h1 className='search-title'>{categories[categoryId]}</h1>
            <h4 className='search-title search-subheader'>Click on a product to view details or make changes</h4>
            <div className='all-search-container'>
                <div className='mapped-search-container'>
                    <ul className='all-search'>
                        {productsCategoryArr.map((result) => {
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



export default Categories;
