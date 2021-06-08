const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      initialState.push(action.payload);
      return state;
    default:
      return state;
  }
};

export default cartReducer;
