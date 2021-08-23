const initialState = {
  products: [
    {
      category: 'ELECTRONICS',
      name: 'elcctronic item 1',
      description: 'some description elcctronic item 1',
      price: 200,
      count: 50,
      img: 'https://via.placeholder.com/300x200/000000',
    },
    {
      category: 'ELECTRONICS',
      name: 'elcctronic item 2',
      description: 'some description elcctronic item 2',
      price: 400,
      count: 70,
      img: 'https://via.placeholder.com/300x200',
    },
    {
      category: 'FOOD',
      name: 'food item 1',
      description: 'some description about food item 1 ',
      price: 40,
      count: 90,
      img: 'https://via.placeholder.com/300x200',
    },
    {
      category: 'FOOD',
      name: 'food item 2',
      description: 'some description about food item 2',
      price: 20,
      count: 100,
      img: 'https://via.placeholder.com/300x200/000000',
    },
    {
      category: 'FOOD',
      name: 'food item 3',
      description: 'some description about food item 3',
      price: 15,
      count: 70,
      img: 'https://via.placeholder.com/300x200',
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

export default productsReducer;
