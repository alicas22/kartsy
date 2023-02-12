import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { thunkCreateProduct } from "../../store/products"
import { useModal } from "../../context/Modal"

const CreateProduct = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal();
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState([])
    const [createdProduct, setCreatedProduct] = useState()

    const user = useSelector(state => state.session.user)
    //console.log('user', user)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            owner_id: user.id,
            name,
            price,
            description
        }

        if (!user) return null

        return dispatch(thunkCreateProduct(payload))
            .then((product) => {
                console.log('product', product)
                setCreatedProduct(product)
                console.log('created prod', createdProduct)
            })
            .then(closeModal)
            .catch(
                async (res) => {
                    const data = await res.json();
                    if (data && (data.errors)) setErrors(data.errors)
                });

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
export default CreateProduct
