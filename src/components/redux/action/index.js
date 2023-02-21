export const GO_TO_DETAIL = "GO_TO_DETAIL";

export const goToDetailAction = (props) => {
  return {
    type: "GO_TO_DETAIL",
    payload: props.userObj,
  };
};
