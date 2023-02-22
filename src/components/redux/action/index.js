export const GO_TO_DETAIL = "GO_TO_DETAIL";
export const GO_TO_LIST = "GO_TO_LIST";

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
