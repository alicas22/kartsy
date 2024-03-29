import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import productReducer from './products'
import reviewsReducer from "./reviews";
import cartItemReducer from './shoppingCartItems';
import searchReducer from './search';
import likesReducer from './like';

const rootReducer = combineReducers({
  session,
  products: productReducer,
  reviews: reviewsReducer,
  cart: cartItemReducer,
  search: searchReducer,
  likes: likesReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
