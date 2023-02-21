const initialState = {
  users: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GO_TO_DETAIL":
      return {
        ...state,
        users: [action.payload],
      };
    default:
      return state;
  }
};

export default mainReducer;
