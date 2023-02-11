import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {thunkGetSingleProduct } from "../../store/products"


const SingleProduct = () => {
    const { productId } = useParams()
    const dispatch = useDispatch()
    console.log(productId)
    useEffect(() => {
        dispatch(thunkGetSingleProduct(productId))
    }, [dispatch, productId])
    
    const product = useSelector((state) => state.products.singleProduct)
    

    if (!product) return null

    return (
        <div>
            <div>{product.name}</div>
        </div>
    )
}

export default SingleProduct