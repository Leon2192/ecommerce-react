export const initialState = {
  basket: [],
  user: null,
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
};

export const getBasketTotal = (basket) => {
   basket?.reduce((amount, item) => amount + item.price, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_ITEM":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let basketNew = [...state.basket];
      if (index >= 0) {
        basketNew.splice(index, 1);
      } else {
        console.log("Cant remove");
      }
      return {
        ...state,
        basket: basketNew,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: action.basket,
      };
    default:
      return state;
  }
};

export default reducer;
