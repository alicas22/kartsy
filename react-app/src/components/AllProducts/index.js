import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { thunkGetProducts } from '../../store/products'
import OpenModalButton from '../OpenModalButton'
import CreateProduct from '../CreateProduct'
import './AllProducts.css';


const AllProducts = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(thunkGetProducts())
    }, [dispatch])

    const productsObj = useSelector((state) => state.products.allProducts)
    const user = useSelector((state)=> state.session.user)
    if (!productsObj) return null

    const products = Object.values(productsObj)

    const ProductClick = (e, id) => {
        e.preventDefault()
        history.push(`/products/${id}`)
    }

    return (
        <div className='all-products-container'>
            <div>
            {user ? (
                <div>
                    <h1>Welcome back {user.firstName}</h1>
                </div>
            ) : (
                <div>
                    <h1>Welcome to Kartsy</h1>
                </div>
            )} 
            </div>
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
                            <div className='product-card' key={product.id} onClick={(e) => ProductClick(e, product.id)}>
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
