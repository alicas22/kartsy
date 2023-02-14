import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { loadAllCartItemsThunk, updateCartItemThunk } from "../../store/shoppingCartItems"
import { thunkGetProducts } from "../../store/products"
import { useModal } from "../../context/Modal"

const GetCart = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    const dispatch = useDispatch()
    const [number, setNumber] = useState({1:1})

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
    if (Object.values(number).length < 1) return null
    const cart = Object.values(cartObj)


    if (!cart) return null

    const updateItem = async (cartItemId, e) => {
        setNumber({...number, [cartItemId]: e.target.value})

        const itemCount = number[cartItemId]
        if(!itemCount) return null

        const payload = {
            countOfProduct:itemCount,
            productId:cartItemId
        }
        dispatch(updateCartItemThunk(payload))
    }

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
                            <select
                                className="dropdown-count"
                                id="count"
                                value={number[cartItem.id]}
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
                        </div>
                    )
                })
                }
            </ul>
        </div>

    )
}

export default GetCart
