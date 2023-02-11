import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { thunkGetProducts } from '../../store/products'


const AllProducts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetProducts())
    }, [dispatch])

    const productsObj = useSelector((state) => state.products.allProducts)

    const products = Object.values(productsObj)
    return (
        <div className='all-products'>
                <ul>
                    {products.map(product => {
                        return (
                            <div className='product-card'>
                                <div className='product-image'>
                                    {product.name}
                                </div>
                            </div>
                        )
                    })
                    }
                </ul>
            </div>
    )
}

export default AllProducts
