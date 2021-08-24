const initialState = {
  items: [],
  count: 0,
  total: 0,
  show: false,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_ITEM':
      
      if (payload.inStock > 0) {
        let newItems = [...state.items, payload];
        let newCount = state.count + 1;
        let newTotal = state.total + payload.price;

        return {
          items: newItems,
          count: newCount,
          total: newTotal,
          show: true,
        };
      } else {
        alert('out of stock');
        return state;
      }
    case 'REMOVE_ITEM':
      if (payload.inStock > 0) {
        let newItems = state.items.filter((item) => {
          return item.name !== payload.name;
        });
        let newCount = state.count - 1;
        let newTotal = state.total - payload.price;

        // console.log('remove item', {
        //   newItems,
        //   newCount,
        //   newTotal,
        //   newshow
        // });

        return {
          items: newItems,
          count: newCount,
          total: newTotal,
          show: state.count === 0 ? false : true,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: 'REMOVE_ITEM',
    payload: item,
  };
};

export default cartReducer;
