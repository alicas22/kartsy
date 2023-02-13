import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { loadAllCartItemsThunk } from "../../store/shoppingCartItems"
import { useModal } from "../../context/Modal"

const getCart = () => {
    const dispatch = useDispatch()

    const cartObj = useSelector((state) => state.cartItems.allCartItems)
    const user = useSelector((state) => state.session.user)

    const cart = Object.values(cartObj)

    useEffect(() => {
        dispatch(loadAllCartItemsThunk())
    }, [dispatch])

    if (!cartObj) return null

    return (
        <div>
            <h1> hello from cart</h1>
            <ul>
                {cart.map(cartItem => {
                    return (
                        <div className='cartItem-card' key={cartItem.id}>
                            <div className='cartItem-image'>
                                {cartItem.name}
                                {/* <img src={product.imagesUrl}></img> */}
                            </div>
                        </div>
                    )
                })
                }
            </ul>
        </div>

    )
}

export default getCart
