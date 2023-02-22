export const GO_TO_DETAIL = "GO_TO_DETAIL";
export const GO_TO_LIST = "GO_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";
export const GET_USER_LOADING = "GET_USER_LOADING";

export const goToDetailAction = (props) => {
  return {
    type: "GO_TO_DETAIL",
    payload: props.userObj,
  };
};

export const goToListAction = (props) => {
  return {
    type: GO_TO_LIST,
    payload: props.userObj,
  };
};

export const removeFromGroupAction = (el) => {
  return {
    type: REMOVE_FROM_LIST,
    payload: el,
  };
};
