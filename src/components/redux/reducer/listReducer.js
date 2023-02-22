import { GO_TO_LIST } from "../action";

const initialState = {
  users: [],
  list: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_TO_LIST:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};

export default listReducer;
