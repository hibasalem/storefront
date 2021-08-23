import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  categories: categoriesReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
