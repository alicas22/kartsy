import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { clearCartItemsThunk } from "../../store/shoppingCartItems"
import { useModal } from "../../context/Modal"
import './CheckoutCart.css';

const CheckoutCart = () => {
    const dispatch = useDispatch()
    const { closeModal } = useModal();

    const products = useSelector((state) => state.products.allProducts)
    const cartObj = useSelector((state) => state.cart.allCartItems)
    if (!products) return null
    if (!cartObj) return null
    const cart = Object.values(cartObj)
    if (!cart) return null

    const clearCart = async (e) => {
        dispatch(clearCartItemsThunk())
        closeModal()
    }

    let totalPrice = 0
    let displayTotal
    if (cart) {
        console.log(cart)
        for (let item of cart) {
            totalPrice += item.productPrice * item.countOfProduct
            displayTotal = totalPrice.toFixed(2)
        }
    }

    return (
        <div className='checkout-summary-container'>
            <h2>Cart summary:</h2>
            <ul className='checkout-ul'>
                {cart.map(cartItem => {
                    return (
                        <div className='checkout-width'>
                            <div className='checkout-card' key={cartItem.id}>
                                <div className='cartItem-left'>
                                    <img className='checkout-image' src={products[cartItem.productId]['imagesUrl']}></img>
                                    <div className='checkout-text'>
                                        <div>
                                            <NavLink to={`/products/${cartItem.productId}`} className='checkout-prod-link' onClick={closeModal}>
                                                {cartItem.productName}
                                            </NavLink>
                                        </div>
                                        <div className='checkout-lower'>
                                            <div className='checkout-quantity'>
                                                Quantity: {cartObj[cartItem.id].countOfProduct}
                                            </div>
                                            <div className='cart-item-price'>
                                                ${cartItem.productPrice.toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </ul>
            <div className='checkout-total'>
                <h4>Item(s) total: </h4>
                <p>${displayTotal}</p>
            </div>
            <NavLink className='checkout-button' to={'/cart/purchasecomplete'} onClick={clearCart}>Complete purchase</NavLink>
        </div>
    )
}

export default CheckoutCart
