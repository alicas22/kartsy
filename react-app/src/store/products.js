const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS'
const LOAD_SINGLE_PRODUCT = 'products/LOAD_SINGLE_PRODUCT'
const CREATE_PRODUCT = 'products/CREATE_PRODUCT'
const EDIT_PRODUCT = 'products/EDIT_PRODUCT'
const DELETE_PRODUCT = 'products/DELETE_PRODUCT'


const loadProducts = (products) => ({
    type: LOAD_PRODUCTS,
    products
})

const loadSingleProduct = (product) => ({
    type: LOAD_SINGLE_PRODUCT,
    product
})

const createProduct = (newproduct) => ({
    type: CREATE_PRODUCT,
    newproduct
})

const editProduct = (updatedProduct) => ({
    type: EDIT_PRODUCT,
    updatedProduct
})

const deleteAProduct = (undoProduct) => ({
    type: DELETE_PRODUCT,
    undoProduct
})


export const thunkGetProducts = () => async (dispatch) => {
    const response = await fetch('/api/products')

    if (response.ok) {
        const products = await response.json()
        dispatch(loadProducts(products))
        return products
    }
}

export const thunkGetSingleProduct = (productId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}`)

    if (response.ok) {
        const product = await response.json()
        console.log("single product", product)
        dispatch(loadSingleProduct(product))
        return product
    }

}

export const thunkCreateProduct = (payload) => async (dispatch) => {
    const response = await fetch('/api/products/', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    console.log('response', response)
    if (response.ok) {
        const newProduct = await response.json()
        dispatch(createProduct(newProduct))
        return newProduct
    }
}

export const thunkEditProduct = (updatedProduct) => async (dispatch) => {
    const response = await fetch(`/api/products/${updatedProduct.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct)
    })

    if (response.ok) {
        const product = await response.json()
        dispatch(editProduct(product))
        return product
    }
}

export const thunkDeleteProduct = (undoProduct) => async (dispatch) => {
    const response = await fetch(`/api/products/${undoProduct.id}`, {
        method: "DELETE"
    })

    if (response.ok) {
        const product = await response.json()
        dispatch(deleteAProduct(product))
        return product
    }
}



const normalize = (arr) => {
    const resObj = {}
    arr.forEach((ele) => { resObj[ele.id] = ele })
    return resObj
}

const initialState = {}

const productReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case LOAD_PRODUCTS:
            newState = { ...state }
            newState.allProducts = normalize(action.products)
            return newState
        case LOAD_SINGLE_PRODUCT:
            newState = { ...state }
            newState.singleProduct = action.product
            return newState
        case CREATE_PRODUCT:
            newState = { ...state }
            newState.allProducts = { ...newState.allProducts, [action.newproduct.id]: action.newproduct }
            newState.singleProduct = { ...newState.singleProduct, ...action.newproduct }
            return newState
        case EDIT_PRODUCT:
            newState = { ...state }
            newState.allProducts = { ...newState.allProducts, [action.updatedProduct.id]: action.updatedProduct }
            newState.singleProduct = { ...newState.singleProduct, ...action.updatedProduct }

            return newState
        case DELETE_PRODUCT:
            newState = { ...state }
            delete newState.allProducts[action.undoProduct.id]
            return newState
        default:
            return state
    }
}

export default productReducer
