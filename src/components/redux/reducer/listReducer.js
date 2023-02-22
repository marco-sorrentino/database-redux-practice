import { GO_TO_LIST, REMOVE_FROM_LIST } from "../action";

const initialState = {
  list: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_TO_LIST:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE_FROM_LIST:
      return {
        ...state,
        list: state.list.filter((el) => el !== action.payload),
      };
    default:
      return state;
  }
};

export default listReducer;
