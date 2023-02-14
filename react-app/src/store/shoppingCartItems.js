const LOAD_ALL_CART_ITEMS = 'cart/LOAD_CART_ITEMS';
const LOAD_SINGLE_CART_ITEM = 'cart/LOAD_SINGLE_CART_ITEM';
const CREATE_CART_ITEM = 'cart/CREATE_CART_ITEM';
const UPDATE_CART_ITEM = 'cart/UPDATE_CART_ITEM';
const DELETE_CART_ITEM = 'cart/DELETE_CART_ITEM';

// const CLEAN_UP_REVIEWS = 'reviews/CLEANUP';

//action creators
export const loadAllCartItemsAction = (cartItems) => {
    return {
        type: LOAD_ALL_CART_ITEMS,
        cartItems
    }
};

// const loadSingleCartItemAction = (cartItem) => ({
//     type: LOAD_SINGLE_CART_ITEM,
//     cartItem
// })

export const createCartItemAction = (newCartItem) => {
    return {
        type: CREATE_CART_ITEM,
        newCartItem
    }
};

export const updateCartItemAction = (updatedCartItem) => {
    return {
        type: UPDATE_CART_ITEM,
        updatedCartItem
    }
};

export const deleteCartItemAction = (badCartItemId) => {
    return {
        type: DELETE_CART_ITEM,
        badCartItemId
    }
};

// export const cleanUpReviewsAction = () => {
//     return {
//         type: CLEAN_UP_REVIEWS
//     }
// };

//thunks
export const loadAllCartItemsThunk = () => async dispatch => {
    const response = await fetch(`/api/cart/`);
    console.log("response from load all cart items thunk", response)
    if (response.ok) {
        const cart = await response.json();
        console.log('cart', cart)
        dispatch(loadAllCartItemsAction(cart));
        return cart;
    }
};

// export const getSingleCartItemThunk = (cartItemId) => async (dispatch) => {
//     const response = await fetch(`/api/cart/${cartItemId}`)

//     if (response.ok) {
//         const cartItem = await response.json()
//         dispatch(loadSingleCartItemAction(cartItem))
//         return cartItem
//     }

// }

export const createCartItemThunk = (payload) => async (dispatch) => {
    const response = await fetch('/api/cart/', {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    console.log("hi from create cart item thunk", response)
    if (response.ok){
        const newCartItem = await response.json()
        dispatch(createCartItemAction(newCartItem))
        return newCartItem
    }

}


export const updateCartItemThunk = (cartItem) => async dispatch => {
    const response = await fetch(`/api/cart/`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(cartItem),
    });

    if (response.ok) {
        const updatedCartItem = await response.json();
        dispatch(updateCartItemAction(updatedCartItem));
        return updatedCartItem;
    }
};

export const deleteCartItemThunk = (badCartItemId) => async dispatch => {
    const response = await fetch(`/api/cart/${badCartItemId}`, {
      method: "DELETE"
    });

    if (response.ok) {
        const badCartItem = await response.json();
        dispatch(deleteCartItemAction(badCartItem));
        return badCartItem;
    }
};

// normalize helper function
const normalize = (arr) => {
    const resObj = {}
    arr.forEach((ele) => {resObj[ele.id] = ele})
    return resObj
}
// cartItem reducer

const initialState = {}

const cartItemReducer = (state = initialState, action) => {
    let newState
    switch(action.type){
        case LOAD_ALL_CART_ITEMS: {
            newState = { ...state }
            newState.allCartItems = normalize(action.cartItems)
            return newState
        }
        case LOAD_SINGLE_CART_ITEM: {
            newState = { ...state }
            newState.singleCartItem = action.cartItem
            return newState
        }
        case CREATE_CART_ITEM:{
            newState = { ...state }
            newState.allCartItems = {...newState.allCartItems, [action.newCartItem.id]: action.newCartItem}
            newState.singleCartItem = {...newState.singleCartItem, ...action.newCartItem}
            return newState
        }
        case UPDATE_CART_ITEM: {
            const newState = { ...state };
            newState.allCartItems = { ...state.allCartItems, [action.updatedCartItem.id]: action.updatedCartItem }
            newState.singleCartItem = { ...newState.singleCartItem, ...action.updatedCartItem }
            return newState;
        }

        case DELETE_CART_ITEM: {
            const newState = { ...state, allCartItems: { ...state.allCartItems } };
            delete newState.allCartItems[action.badCartItemId];
            return newState;
        }
        default:
            return state
    }
}
export default cartItemReducer;
