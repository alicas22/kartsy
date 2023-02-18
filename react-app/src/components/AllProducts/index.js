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
        history.push(`/products/14`)
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

    //BREAK
    const Product6Click = (e, id) => {
        e.preventDefault()
        history.push(`/products/11`)
    }
    const Product7Click = (e, id) => {
        e.preventDefault()
        history.push(`/products/24`)
    }
    const Product8Click = (e, id) => {
        e.preventDefault()
        history.push(`/products/26`)
    }
    const Product9Click = (e, id) => {
        e.preventDefault()
        history.push(`/products/36`)
    }
    const Product10Click = (e, id) => {
        e.preventDefault()
        history.push(`/products/38`)
    }
    const Product11Click = (e, id) => {
        e.preventDefault()
        history.push(`/products/28`)
    }
    const Product12Click = (e, id) => {
        e.preventDefault()
        history.push(`/products/23`)
    }
    const Product13Click = (e, id) => {
        e.preventDefault()
        history.push(`/products/32`)
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
                {user && (
                    <div style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div className='something'>
                        <h3>Favorites & more</h3>
                        </div>
                        <div className='create-product-modal-container'>
                            <div className="create-product-modal">
                                <OpenModalButton
                                    buttonText="Create Product"
                                    modalComponent={<CreateProduct />}
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className='main-main-square-container'>
                    <div>
                        <div className='main-square-container'>
                            <div className='square-image'>
                                <img className='img'  onClick={(e) => Product6Click(e)} src='https://i.etsystatic.com/5153755/r/il/58f978/3606302592/il_794xN.3606302592_f1zq.jpg'></img>
                                <div className='product-price-container1 '>$96.00</div>
                            </div>
                            <div className='square-image'>
                                <img className='img'  onClick={(e) => Product7Click(e)} src='https://www.etsy.com/img/35001350/r/il/96e0f8/4302314069/il_794xN.4302314069_qdbb.jpg'></img>
                                <div className='product-price-container1 '>$129.00</div>
                            </div>
                            <div className='square-image'>
                                <img className='img'  onClick={(e) => Product8Click(e)} src='https://www.etsy.com/img/12953790/r/il/385c57/2336200012/il_794xN.2336200012_4ocm.jpg'></img>
                                <div className='product-price-container1 '>$2115.28</div>
                            </div>
                            <div className='square-image'>
                                <img className='img'  onClick={(e) => Product9Click(e)} src='https://www.etsy.com/img/18224097/r/il/04097b/1818968298/il_794xN.1818968298_4cvu.jpg'></img>
                                <div className='product-price-container1 '>$142.68</div>
                            </div>
                            <div className='square-image'>
                                <img className='img'  onClick={(e) => Product10Click(e)} src='https://www.etsy.com/img/38673016/r/il/be3cc5/4590192881/il_794xN.4590192881_64pb.jpg'></img>
                                <div className='product-price-container1 '>$16.97</div>
                            </div>
                            <div className='square-image'>
                                <img className='img'  onClick={(e) => Product11Click(e)} src='https://www.etsy.com/img/14217457/r/il/154077/1507211365/il_794xN.1507211365_pum8.jpg'></img>
                                <div className='product-price-container1 '>$8.32</div>
                            </div>
                            <div className='square-image'>
                                <img className='img'  onClick={(e) => Product12Click(e)} src='https://www.etsy.com/img/28674208/r/il/80fa8f/4177697016/il_794xN.4177697016_qwr0.jpg'></img>
                                <div className='product-price-container1 '>$124.79</div>
                            </div>
                            <div className='square-image'>
                                <img className='img'  onClick={(e) => Product13Click(e)} src='https://www.etsy.com/img/13343182/r/il/6a50b1/1598844339/il_794xN.1598844339_53j7.jpg'></img>
                                <div className='product-price-container1 '>$13.99</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mapped-products-container'>
                <h1>Browse for more inspiration</h1>
                <ul className='all-products'>
                    {products.map((product) => {
                        return (
                            <div>
                                <div className='product-card' key={product.id} onClick={(e) => ProductClick(e, product.id)}>
                                    <div className='image-container'>
                                        <img className='product-image' src={product.imagesUrl}></img>
                                    </div>
                                    <div className='product-price-container'>
                                        ${product.price.toFixed(2)}
                                    </div>
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
