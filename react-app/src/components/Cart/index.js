import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { loadAllCartItemsThunk } from "../../store/shoppingCartItems"
import { thunkGetProducts } from "../../store/products"
import { useModal } from "../../context/Modal"

const GetCart = () => {
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(loadAllCartItemsThunk())
        .then(dispatch(thunkGetProducts()))
    }, [dispatch])

    const cartObj = useSelector((state) => state.cart.allCartItems)
    const products = useSelector((state) => state.products.allProducts)
    const user = useSelector((state) => state.session.user)
    console.log('cartobj', cartObj)
    console.log('all prod', products)

    if (!cartObj) return null
    if (!products) return null
    const cart = Object.values(cartObj)


    if (!cart) return null

    return (
        <div>
            <h1> hello from cart {cart[0].id}</h1>
            <ul>
                {cart.map(cartItem => {
                    return (
                        <div className='cartItem-card' key={cartItem.id}>
                            <div className='cartItem-image'>
                                {cartItem.productName}
                                {cartItem.productPrice}

                                <img src={products[cartItem.productId]['imagesUrl']}></img>
                            </div>
                        </div>
                    )
                })
                }
            </ul>
        </div>

    )
}

export default GetCart
