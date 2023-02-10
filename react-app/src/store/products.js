const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS'


const loadProducts = (products) => ({
    type: LOAD_PRODUCTS,
    products
})

export const thunkGetProducts = () => async (dispatch) => {
    const response = await fetch('/api/products')

    if(response.ok){
        const products = await response.json()
        console.log('products', products)
        dispatch(loadProducts(products))
        return products
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
        default:
            return state
    }
}

export default productReducer
