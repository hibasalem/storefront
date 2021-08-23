const initialState = {
  products: [
    {
      category: 'ELECTRONICS',
      name: 'elcctronic item 1',
      description: 'some description elcctronic item 1',
      price: 200,
      count: 50,
      img: 'https://images.unsplash.com/photo-1579113509331-cbe31a951a02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
    },
    {
      category: 'ELECTRONICS',
      name: 'elcctronic item 2',
      description: 'some description elcctronic item 2',
      price: 400,
      count: 70,
      img: 'https://images.unsplash.com/photo-1558629420-f7fa42552501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=431&q=80',
    },
    {
      category: 'FOOD',
      name: 'food item 1',
      description: 'some description about food item 1 ',
      price: 40,
      count: 90,
      img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
      category: 'FOOD',
      name: 'food item 2',
      description: 'some description about food item 2',
      price: 20,
      count: 0,
      img: 'https://images.unsplash.com/photo-1519233991914-26a44330ccd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    },
    {
      category: 'FOOD',
      name: 'food item 3',
      description: 'some description about food item 3',
      price: 35,
      count: 20,
      img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80',
    },
    {
      category: 'FOOD',
      name: 'food item 4',
      description: 'some description about food item 4',
      price: 25,
      count: 70,
      img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80',
    },
  ],
  fillterd: [],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  // console.log('hi');
  switch (type) {
    case 'SELECT_ACTIVE2':
      let products = state.products.filter((item) =>
        item.category === payload ? item : null
      );
      // console.log('products', products);
      return { products: state.products, fillterd: products };

    case 'ADD_ITEM2':
      let newProducts = state.products.map((item) => {
        if (item.name === payload.name) {
          item.count = item.count - 1;
        }
        return item;
      });

      // console.log('products', newProducts);
      // console.log('fillterd', state.fillterd);

      return { products: newProducts, fillterd: state.fillterd };

    case 'REMOVE_ITEM2':
      let newProducts2 = state.products.map((item) => {
        if (item.name === payload.name) {
          item.count = item.count + 1;
        }
        return item;
      });

      // console.log('products from remove ', newProducts2);
      // console.log('fillterd from remove', state.fillterd);

      return { products: newProducts2, fillterd: state.fillterd };

    default:
      return state;
  }
};

export const selectActiveItems = (name) => {
  // console.log('name 1', name);
  return {
    type: 'SELECT_ACTIVE2',
    payload: name,
  };
};

export const reduceCount = (item) => {
  return {
    type: 'ADD_ITEM2',
    payload: item,
  };
};

export const increseCount = (item) => {
  return {
    type: 'REMOVE_ITEM2',
    payload: item,
  };
};
export default productsReducer;
