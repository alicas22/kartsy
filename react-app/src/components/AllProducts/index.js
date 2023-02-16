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
    const user = useSelector((state) => state.session.user)
    if (!productsObj) return null

    const products = Object.values(productsObj)

    const ProductClick = (e, id) => {
        e.preventDefault()
        history.push(`/products/${id}`)
    }
    const Product1Click = (e, id) => {
        e.preventDefault()
        history.push(`/products/13`)
    }
    const Product2Click = (e, id) => {
        e.preventDefault()
        history.push(`/products/6`)
    }
    const Product3Click = (e, id) => {
        e.preventDefault()
        history.push(`/products/9`)
    }
    const Product4Click = (e, id) => {
        e.preventDefault()
        history.push(`/products/5`)
    }
    const Product5Click = (e, id) => {
        e.preventDefault()
        history.push(`/products/8`)
    }

    return (
        <div className='all-products-container'>
            <div className='welcome-back-container'>
                {user ? (
                    <div className='welcomeback-background'>
                        <div className='welcome-back'>
                            <h1>Welcome back,</h1>
                            <h1 className='users-name'>{user.firstName}!</h1>
                        </div>
                    </div>
                ) : (
                    <div className='welcomeback-background'>
                        <div className='welcome-back'>
                            <h1>Welcome to Kartsy</h1>
                        </div>
                    </div>

                )}
            </div>
            <div className='container-holding-image-catagories'>
                {/* <div className='top-catagories-container'>hello</div> */}
                <div className='each-image-catagories'>
                    <div className='this-div'>
                        <div className='image-container-circle-name' onClick={(e) => Product1Click(e)}>
                            <img className='first-image' src='https://i.etsystatic.com/26971380/r/il/702111/3483202701/il_794xN.3483202701_bj16.jpg' ></img>
                        </div>
                        <div className='h4-div'>
                            <h4 className='decor-container'>Decor</h4>
                        </div>
                    </div>
                    <div className='this-div'>
                        <div className='image-container-circle-name' onClick={(e) => Product2Click(e)}>
                            <img className='first-image' src='https://i.etsystatic.com/36747487/r/il/5c5458/4251418111/il_1588xN.4251418111_sk24.jpg'></img>
                        </div>
                        <div className='h4-div'>
                            <h4 className='jewelry-container'>Jewelry</h4>
                        </div>
                    </div>
                    <div className='this-div'>
                        <div className='image-container-circle-name' onClick={(e) => Product3Click(e)}>
                            <img className='first-image' src='https://i.etsystatic.com/20889344/r/il/c3cefc/2552488485/il_1588xN.2552488485_2ppg.jpg'></img>
                        </div>
                        <div className='h4-div'>
                            <h4 className='tech-container'>Tech</h4>
                        </div>
                    </div>
                    <div className='this-div'>
                        <div className='image-container-circle-name' onClick={(e) => Product4Click(e)}>
                            <img className='first-image' src='https://m.media-amazon.com/images/I/81pEwkv-KVL._AC_SX466_.jpg'></img>
                        </div>
                        <div className='h4-div'>
                            <h4 className='boardgame-container' >Board games</h4>
                        </div>
                    </div>
                    <div className='this-div'>
                        <div className='image-container-circle-name' onClick={(e) => Product5Click(e)}>
                            <img className='first-image' src='https://i.etsystatic.com/8660202/r/il/c14c50/1233724812/il_1588xN.1233724812_up1g.jpg'></img>
                        </div>
                        <div className='h4-div'>
                            <h4 className='shoes-container'>Shoes</h4>
                        </div>
                    </div>
                </div>
                
            </div>
            {user && (
                <div className='create-product-modal-container'>
                    <div className="create-product-modal">
                        <OpenModalButton
                            buttonText="Create Product"
                            modalComponent={<CreateProduct />}
                        />
                    </div>
                </div>
            )}
            <div className='mapped-products-container'>
                <ul className='all-products'>
                    {products.map((product) => {
                        return (
                            <div className='product-card' key={product.id} onClick={(e) => ProductClick(e, product.id)}>
                                <div className='image-container'>
                                    <img className='product-image' src={product.imagesUrl}></img>
                                </div>
                                <div className='product-price-container'>
                                    ${product.price.toFixed(2)}
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
