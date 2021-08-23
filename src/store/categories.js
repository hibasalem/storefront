const initialState = {
  Categories: [
    {
      normalizedName: 'ELECTRONICS',
      displayName: 'ELECTRONICS',
      description: 'some description about electronics',
    },
    {
      normalizedName: 'FOOD',
      displayName: 'FOOD',
      description: 'some description about food',
    },
  ],
  active: {},
};

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SELECT_ACTIVE':
      let active;
      state.Categories.map((item) =>
        item.normalizedName === payload ? (active = item) : false
      );
      const Categories = state.Categories;
      console.log(active);
      return { Categories, active };

    default:
      return state;
  }
};

export const selectActive = (name) => {
  // console.log('name 2', name);
  return {
    type: 'SELECT_ACTIVE',
    payload: name,
  };
};

export default categoriesReducer;
