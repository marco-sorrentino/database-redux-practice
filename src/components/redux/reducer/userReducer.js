import { GET_USER_LOADING, GO_TO_DETAIL } from "../action";

const initialState = {
  users: [],
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_TO_DETAIL:
      return {
        ...state,
        users: [action.payload],
      };
    case GET_USER_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
