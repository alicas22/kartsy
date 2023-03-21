import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { thunkCreateProduct } from "../../store/products"
import { useModal } from "../../context/Modal"
import "./CreateProduct.css"


const CreateProduct = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal();
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [category, setCategory] = useState('')
    const [errors, setErrors] = useState([])
    const [createdProduct, setCreatedProduct] = useState()

    const user = useSelector(state => state.session.user)


    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            ownerId: user.id,
            name,
            price,
            description,
            imageUrl,
            categoryId: category
        }

        if (!user) return null

        const data = await dispatch(thunkCreateProduct(payload))

        if (Array.isArray(data)) {
            setErrors(data);
        } else {
            await setCreatedProduct(data)
            closeModal();
        }

    }


    useEffect(() => {
        if (createdProduct) {
            history.push(`/products/${createdProduct.id}`)
        }
    }, [createdProduct])

    return (
        <div className="create-product-form">
            <h1>Create Product</h1>
            <form className='product-form' onSubmit={handleSubmit}>
                {/* <ul className="validation-errors">
                    {errors.map((error, idx) => (
					    <li key={idx}>{error}</li>
					))}
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
                        min="0"
                        placeholder="0.00"
                        step="0.01"
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
                <label>
                    <p>
                        Image URL
                    </p>
                    <input
                        id="imageUrl"
                        type="url"
                        name="imageUrl"
                        placeholder="https://www.example.com/image.jpg"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <div className='validation-errors'>
                        {errors.filter((error) => error.includes('image')).length > 0 ? errors.filter((error) => error.includes('image'))[0].split(': ')[1] : ''}
                    </div>
                </label>
                <button className="create-product-submit-button" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default CreateProduct
