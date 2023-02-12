import { useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { thunkEditProduct } from "../../store/products"
import { useModal } from "../../context/Modal"
import SingleProduct from "../SingleProduct"
import { thunkGetSingleProduct } from "../../store/products"


const EditProduct = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const editproduct = useSelector((state) => state.products.singleProduct)
    const { closeModal } = useModal();
    const [name, setName] = useState(editproduct.name)
    const [price, setPrice] = useState(editproduct.price)
    const [description, setDescription] = useState(editproduct.description)
    const [errors, setErrors] = useState([])

    const user = useSelector(state => state.session.user)


    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            ...editproduct,
            name,
            price,
            description
        }

        if (!user) return null

        await dispatch(thunkEditProduct(payload))
            // .then((product) => {
            //     console.log('product', product)
            //     setCreatedProduct(product)
            //     console.log('created prod', createdProduct)
            // })
            .then(closeModal)
        // .catch(
        //     async (res) => {
        //         const data = await res.json();
        //         if (data && (data.errors)) setErrors(data.errors)
        //     });
        history.push(`/products/${payload.id}`)

    }

    return (
        <div className="edit-product-form">
            <h1>Edit Product</h1>
            <form className='edit-product-form' onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, index) => <li className="errors-text" key={index}>{error}</li>)}
                </ul>
                <label>
                    <p>
                        Name
                    </p>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    <p>
                        Price
                    </p>
                    <input
                        id="price"
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
                <label>
                    <p>
                        Description
                    </p>
                    <input
                        id="description"
                        type="textarea"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default EditProduct