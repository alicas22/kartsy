import { useState } from "react"
import { useHistory } from 'react-router-dom'
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
    const [imagesUrl, setImagesUrl] = useState(editproduct.imagesUrl)
    const [category, setCategory] = useState(editproduct.categoryId)
    const [errors, setErrors] = useState([])


    const user = useSelector(state => state.session.user)


    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            ...editproduct,
            name,
            price,
            description,
            imageUrl: imagesUrl,
            categoryId: category
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
                {/* <ul className="validation-errors">
                    {errors.map((error, index) => <li className="errors-text" key={index}>{error}</li>)}
                </ul> */}
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
                    <div className='validation-errors'>
                        {errors.filter((error) => error.includes('name')).length > 0 ? errors.filter((error) => error.includes('name'))[0].split(': ')[1] : ''}
                    </div>
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
                    <div className='validation-errors'>
                        {errors.filter((error) => error.includes('price')).length > 0 ? errors.filter((error) => error.includes('price'))[0].split(': ')[1] : ''}
                    </div>
                </label>
                <label>
                    <p>
                        Category
                    </p>
                    <select
                        className="select-categories"
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select a category</option>
                        <option value="1">Art</option>
                        <option value="2">Clothing</option>
                        <option value="3">Electronics</option>
                        <option value="4">Gifts</option>
                        <option value="5">Home</option>
                        <option value="6">Toys</option>
                    </select>
                    <div className='validation-errors'>
                        {errors.filter((error) => error.includes('category')).length > 0 ? errors.filter((error) => error.includes('category'))[0].split(': ')[1] : ''}
                    </div>
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
                    <div className='validation-errors'>
                        {errors.filter((error) => error.includes('description')).length > 0 ? errors.filter((error) => error.includes('description'))[0].split(': ')[1] : ''}
                    </div>
                </label>
                <button className="edit-product-submit-button" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default EditProduct
