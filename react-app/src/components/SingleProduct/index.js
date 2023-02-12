import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { thunkGetSingleProduct } from "../../store/products"
import OpenModalButton from "../OpenModalButton"
import EditProduct from "../EditProduct"


const SingleProduct = () => {
    const { productId } = useParams()
    const dispatch = useDispatch()
    console.log(productId)
    useEffect(() => {
        dispatch(thunkGetSingleProduct(productId))
    }, [dispatch, productId])

    const product = useSelector((state) => state.products.singleProduct)
    const user = useSelector((state)=> state.session.user)


    if (!product) return null

    return (
        <div>
            <div>{product.name}</div>
            {user && (
                <div className="create-product-modal">
                    <OpenModalButton
                        buttonText="Edit Product"
                        modalComponent={<EditProduct />}
                    />
                </div>
            )}
        </div>
    )
}

export default SingleProduct