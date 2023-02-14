import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { thunkGetProducts } from '../../store/products'
import OpenModalButton from '../OpenModalButton'
import CreateProduct from '../CreateProduct'
import './AllProducts.css';


const AllProducts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetProducts())
    }, [dispatch])

    const productsObj = useSelector((state) => state.products.allProducts)
    const user = useSelector((state)=> state.session.user)
    if (!productsObj) return null

    const products = Object.values(productsObj)

    return (
        <div className='all-products-container'>
            {user && (
                <div className="create-product-modal">
                    <OpenModalButton
                        buttonText="Create Product"
                        modalComponent={<CreateProduct />}
                    />
                </div>
            )}
            <div>
                <ul className='all-products'>
                    {products.map(product => {
                        return (
                            <div className='product-card' key={product.id}>
                                {/* <div className='product-image-container'> */}
                                    <img className='product-image' src={product.imagesUrl}></img>
                                {/* </div> */}
                                <div className='product-price-container'>
                                    ${product.price}
                                </div>
                            </div>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    )
}

export default AllProducts
