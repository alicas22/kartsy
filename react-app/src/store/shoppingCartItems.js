const LOAD_ALL_CART_ITEMS = 'cart/LOAD_CART_ITEMS';
const CREATE_CART_ITEM = 'cart/CREATE_CART_ITEM';
const UPDATE_CART_ITEM = 'cart/UPDATE_CART_ITEM';
const DELETE_CART_ITEM = 'cart/DELETE_CART_ITEM';
const CLEAN_UP_CART = 'cart/CLEAN_UP_CART'


//action creators
export const loadAllCartItemsAction = (cartItems) => {
    return {
        type: LOAD_ALL_CART_ITEMS,
        cartItems
    }
};


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

export const cleanUpCartAction = () => {
    return {
        type: CLEAN_UP_CART
    }
};

//thunks
export const loadAllCartItemsThunk = () => async dispatch => {
    const response = await fetch(`/api/cart/`);
    if (response.ok) {
        const cart = await response.json();
        dispatch(loadAllCartItemsAction(cart));
        return cart;
    }
};


export const createCartItemThunk = (payload) => async (dispatch) => {
    const response = await fetch('/api/cart/', {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
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
    const response = await fetch(`/api/cart/`, {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(badCartItemId),
    });

    if (response.ok) {
        const badCartItem = await response.json();
        dispatch(deleteCartItemAction(badCartItem.cartItemId));
        return badCartItem;
    }
};

export const clearCartItemsThunk = () => async dispatch => {

    const response = await fetch(`/api/cart/purchasecomplete/`, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'},
    });


    if (response.ok) {
        dispatch(cleanUpCartAction());
        return response;
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

        case CREATE_CART_ITEM:{
            newState = { ...state }
            newState.allCartItems = {...newState.allCartItems, [action.newCartItem.id]: action.newCartItem}
            return newState
        }
        case UPDATE_CART_ITEM: {
            const newState = { ...state };
            newState.allCartItems = { ...state.allCartItems, [action.updatedCartItem.id]: action.updatedCartItem }
            return newState;
        }
        case DELETE_CART_ITEM: {
            const newState = { ...state };
            delete newState.allCartItems[action.badCartItemId];
            newState.allCartItems = { ...newState.allCartItems }
            return newState;
        }
        case CLEAN_UP_CART: {
            const newState = { ...initialState };
            return newState;
        }
        default:
            return state
    }
}
export default cartItemReducer;
