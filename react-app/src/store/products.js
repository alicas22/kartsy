const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS'
const LOAD_SINGLE_PRODUCT = 'products/LOAD_SINGLE_PRODUCT'


const loadProducts = (products) => ({
    type: LOAD_PRODUCTS,
    products
})

const loadSingleProduct = (product) => ({
    type: LOAD_SINGLE_PRODUCT,
    product
})

export const thunkGetProducts = () => async (dispatch) => {
    const response = await fetch('/api/products')

    if(response.ok){
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

const normalize = (arr) => {
    const resObj = {}
    arr.forEach((ele) => {resObj[ele.id] = ele})
    return resObj
}

const initialState = {}

const productReducer = (state = initialState, action) => {
    let newState
    switch(action.type){
        case LOAD_PRODUCTS:
            newState = { ...state }
            newState.allProducts = normalize(action.products)
            return newState
        case LOAD_SINGLE_PRODUCT:
            newState = { ...state }
            newState.singleProduct = action.product
            return newState
        default:
            return state
    }
}

export default productReducer
