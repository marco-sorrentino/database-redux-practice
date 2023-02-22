/* import { GO_TO_DETAIL } from "../action";

const initialState = {
  users: [],
  list: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_TO_DETAIL:
      return {
        ...state,
        users: [action.payload],
      };
    case "GO_TO_LIST":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};

export default mainReducer;
 */
