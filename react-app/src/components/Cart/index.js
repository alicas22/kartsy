import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { cleanUpCartAction, loadAllCartItemsThunk, updateCartItemThunk, deleteCartItemThunk } from "../../store/shoppingCartItems"
import { thunkGetProducts } from "../../store/products"
import OpenModalButton from "../OpenModalButton"
import CheckoutCart from '../CheckoutCart'
import './Cart.css';


const GetCart = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    const dispatch = useDispatch()
    const [number, setNumber] = useState({ 1: 1 })
    const [money, setMoney] = useState(null)

    const cartObj = useSelector((state) => state.cart.allCartItems)
    const products = useSelector((state) => state.products.allProducts)
    const user = useSelector((state) => state.session.user)

    useEffect(() => {
        dispatch(loadAllCartItemsThunk())
            .then(dispatch(thunkGetProducts()))
    }, [dispatch])

    useEffect(() => {
        if (user == null) {
            dispatch(cleanUpCartAction())
        }
    }, [user, dispatch])


    if (!cartObj) return null
    const cart = Object.values(cartObj)
    if (!products) return null
    if (!cart) return null


    const updateItem = async (cartItemId, e) => {
        setNumber({ ...number, [cartItemId]: e.target.value })


        const payload = {
            countOfProduct: e.target.value, //e.target.value will send the selected value instead of having to wait for number to update (delayed bc of async)
            cartItemId: cartItemId
        }
        dispatch(updateCartItemThunk(payload))
    }


    const deleteCartItem = async (cartItemId, e) => {
        e.preventDefault()

        const payload = {
            cartItemId: cartItemId
        }
        dispatch(deleteCartItemThunk(payload))

    }



    // get total price for all items in cart
    let totalPrice = 0
    let displayTotal
    if (cart) {

        for (let item of cart) {
            totalPrice += item.productPrice * item.countOfProduct
            displayTotal = totalPrice.toFixed(2)
        }
    }

    return (
        <>
            <div className='cart-page'>
                <div className='cart-header'>
                    <h1 className='cart-title'> {cart.length} item(s) in your cart</h1>
                    <NavLink className='keep-shopping' to={'/'}>Keep shopping</NavLink>
                </div>
                <div className='left-right-cart'>
                    <ul className='cart-ul'>
                        {cart.map(cartItem => {
                            return (
                                <div>
                                    <div className='cartItem-card' key={cartItem.id}>
                                        <div className='cartItem-left'>
                                            <img className='cartItem-image' src={products[cartItem.productId]['imagesUrl']}></img>
                                            <div className='cartItem-text'>
                                                <div className='title-delete'>
                                                    <div>
                                                        <NavLink to={`/products/${cartItem.productId}`} className='single-prod-link'>
                                                            {cartItem.productName}
                                                        </NavLink>
                                                    </div>
                                                    <button className='delete-cart-item' onClick={(e) => deleteCartItem(cartItem.id, e)}>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='cartItem-right'>
                                            <select
                                                className="dropdown-count"
                                                id="count"
                                                value={cartObj[cartItem.id].countOfProduct} //changed to store value so value will persist on refresh
                                                onChange={e => updateItem(cartItem.id, e)}
                                            >
                                                {numbers.map((count) => (
                                                    <option
                                                        key={count}
                                                        value={count}
                                                    >
                                                        {count}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className='cart-item-price'>
                                                ${cartItem.productPrice.toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </ul>
                    <div className='buy-card'>
                        {cart.length !==0 && (
                            <form className='currency-type'>
                                <label className='how-youll-pay' htmlFor="money">How you'll pay </label>
                                <div className='money-container'>
                                    <input
                                        id="money"
                                        type="radio"
                                        checked={money === 'bitcoin'}
                                        name="bitcoin"
                                        onChange={(e) => setMoney(e.target.name)}
                                        value={money}
                                    /><i class="fa-brands fa-bitcoin"></i><p className='button-text'>Bitcoin</p>
                                </div>
                                <div className='money-container'>
                                    <input
                                        id="money"
                                        type="radio"
                                        checked={money === 'monopoly money'}
                                        name="monopoly money"
                                        onChange={(e) => setMoney(e.target.name)}
                                        value={money}
                                    /><i class="fa-solid fa-sack-dollar"></i><p className='button-text'>Monopoly Money</p>
                                </div>
                            </form>
                        )}
                        <div className='total-price'>
                            <h4 className='total-price-text'>Item(s) total: </h4>
                            <p className='total-price-text'>${displayTotal}</p>
                        </div>
                        {money && (
                            <div className='checkout-message'>Checkout with {money}.</div>
                        )}
                        {money == null && cart.length !== 0 && (
                            <div className='please-select-payment'>Please select a payment type.</div>
                        )}
                        {money && cart.length !== 0 ? (
                            // <NavLink className='checkout-button' to={'/cart/purchasecomplete'} onClick={clearCart}>Complete purchase</NavLink>
                            <div className="checkout-cart-modal">
                                <OpenModalButton
                                    buttonText='Proceed to checkout'
                                    modalComponent={<CheckoutCart />}
                                />
                            </div>
                        ) : (
                            <button className='checkout-button-disabled' disabled={true}>Proceed to checkout</button>
                        )}
                        <p className='cart-taxes'>* Additional duties and taxes may apply</p>
                    </div>
                </div>
                <p className='carbon-emissions'><i class="fa-solid fa-leaf"></i> Kartsy offsets carbon emissions from every delivery</p>
            </div >
        </>

    )
}


export default GetCart
