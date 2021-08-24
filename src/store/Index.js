import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  categories: categoriesReducer,
});

const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store();
