import {  useState } from "react"
import { useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { thunkEditProduct } from "../../store/products"
import { useModal } from "../../context/Modal"
import './EditProduct.css'


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

        const data = await dispatch(thunkEditProduct(payload))

        if (Array.isArray(data)) {
            setErrors(data);
        } else {
            history.push(`/products/${payload.id}`)
            closeModal();
        }

    }



    return (
        <div className="edit-product-form">
            <h1>Edit Product</h1>
            <form className='edit-product-form' onSubmit={handleSubmit}>
                <ul className="validation-errors">
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
                    <textarea
                        id="description"
                        type="textarea"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <button className="edit-product-submit-button" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default EditProduct
