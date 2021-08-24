import axios from 'axios';
const api = `https://api-js401.herokuapp.com/api/v1`;

export const getRemoteData = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const raw = await fetch(`${api}/products`);
    const results = await raw.json();
    dispatch(getAllData(results));
  };
};

export const getCategories = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const raw = await fetch(`${api}/categories`);
    const results = await raw.json();
    dispatch(getAllCategories(results));
  };
};

export const addTocart = (item) => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log(item);
    item.inStock = item.inStock - 1;
    console.log(item);
    await axios.put(`${api}/products/${item._id}`, item);
    dispatch(addTocart2(item));
  };
};

export const removeFromCart = (item) => {
  return async (dispatch, getState) => {
    const state = getState();
    item.inStock = item.inStock + 1;
    await axios.put(`${api}/products/${item._id}`, item);
    dispatch(removeFromCart2(item));
  };
};

export const getAllData = (payload) => {
  return {
    type: 'GET_ALL_DATA',
    payload: payload,
  };
};

export const getAllCategories = (payload) => {
  return {
    type: 'GET_ALL_CATEGORIES',
    payload: payload,
  };
};

export const addTocart2 = (payload) => {
  return {
    type: 'ADD_ITEM2',
    payload: payload,
  };
};

export const removeFromCart2 = (payload) => {
  return {
    type: 'REMOVE_ITEM2',
    payload: payload,
  };
};
