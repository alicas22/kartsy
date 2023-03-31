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
    const [category, setCategory] = useState('')
    const [errors, setErrors] = useState([])
    const [createdProduct, setCreatedProduct] = useState()
    //image upload
    const [imageUrl, setImageUrl] = useState(null)
    const [imageLoading, setImageLoading] = useState(false);

    const user = useSelector(state => state.session.user)
    console.log('url', imageUrl)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])
        setImageLoading(true);

        let image;
        if (imageUrl) {
            const formData = new FormData();
            formData.append("imageUrl", imageUrl);

            const res = await fetch('/api/images', {
                method: "POST",
                body: formData,
            });
            if (res.ok) {
                image = await res.json();
                console.log('response from image fetch', image)
            }
            else {
                setErrors(["Failed to upload image"]);
                setImageLoading(false);
                return;
            }
        }

        const payload = {
            ownerId: user.id,
            name,
            price,
            description,
            imageUrl: image?.url,
            categoryId: category
        }

        if (!user) return null

        // setImageLoading(true);
        const data = await dispatch(thunkCreateProduct(payload))

        if (Array.isArray(data)) {
            setErrors(data);
            setImageLoading(false);
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
            <form className='product-form'
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
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

                <div className='product-image-input-container'>
                    <label htmlFor="product-image-upload" className="product-image-upload">
                        <div className="upload-photo-button" >Upload Photo</div>
                        <div className='upload-loading-container'>
                            {(imageLoading) && <p>Loading...</p>}
                            {!imageLoading && imageUrl && <div className='uploaded-image-name'>{imageUrl.name}</div>}
                        </div>
                    </label>
                    <input
                        id="product-image-upload"
                        className="product-image-upload-input"
                        type="file"
                        name="file"
                        accept="image/*"
                        onChange={(e) => setImageUrl(e.target.files[0])}
                    />
                    <div className='validation-errors'>
                        {errors.filter((error) => error.includes('image')).length > 0 ? errors.filter((error) => error.includes('image'))[0].split(': ')[1] : ''}
                    </div>
                </div>
                <button className="create-product-submit-button" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default CreateProduct
