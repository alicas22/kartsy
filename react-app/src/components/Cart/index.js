import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { cleanUpCartAction, loadAllCartItemsThunk, updateCartItemThunk, deleteCartItemThunk } from "../../store/shoppingCartItems"
import { thunkGetProducts } from "../../store/products"
import { useModal } from "../../context/Modal"


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
                .then(dispatch(loadAllCartItemsThunk()))
    }


    return  (
        <div>
            <h1> hello from cart</h1>
            <ul>
                {cart.map(cartItem => {
                    return (
                        <div className='cartItem-card' key={cartItem.id}>
                            <div className='cartItem-image'>
                                {cartItem.productName}
                                {cartItem.productPrice}

                                <img src={products[cartItem.productId]['imagesUrl']}></img>
                            </div>
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
                            <button onClick={(e) => deleteCartItem(cartItem.id, e)}>Delete</button>
                        </div>
                    )
                })
                }
            </ul>
        </div>
    )
}


export default GetCart