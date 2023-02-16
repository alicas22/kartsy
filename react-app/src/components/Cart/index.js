import { useEffect, useState } from "react"
import { useHistory, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { cleanUpCartAction, loadAllCartItemsThunk, updateCartItemThunk, deleteCartItemThunk, clearCartItemsThunk } from "../../store/shoppingCartItems"
import { thunkGetProducts } from "../../store/products"
import './Cart.css';


const GetCart = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    const dispatch = useDispatch()
    const [number, setNumber] = useState({ 1: 1 })

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
    }, [user])


    if (!cartObj) return null
    const cart = Object.values(cartObj)
    if (!products) return null
    if (!cart) return null


    const updateItem = async (cartItemId, e) => {
        setNumber({ ...number, [cartItemId]: e.target.value })

        // const itemCount = number[cartItemId]
        // if(!itemCount) return null

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
        // .then(dispatch(loadAllCartItemsThunk()))
    }

    const clearCart = async (e)=>{
        dispatch(clearCartItemsThunk())
    }

    // get total price for all items in cart
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
                                                {cartItem.productPrice.toString().includes('.') && (
                                                    <div>${cartItem.productPrice.toString().concat('00').slice(0, 5)}</div>
                                                )}
                                                {!cartItem.productPrice.toString().includes('.') && (
                                                    <div>${cartItem.productPrice.toString().concat('.00').slice(0, 5)}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </ul>
                    <div className='buy-card'>
                        <div className='total-price'>
                            <h4>Item(s) total: </h4>
                            <p>${displayTotal}</p>
                        </div>
                        {cart.length !== 0 ? (
                            <NavLink className='checkout-button' to={'/cart/purchasecomplete'} onClick={clearCart}>Complete purchase</NavLink>
                        ) : (
                            <button className='checkout-button-disabled' disabled={true}>Complete purchase</button>
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
