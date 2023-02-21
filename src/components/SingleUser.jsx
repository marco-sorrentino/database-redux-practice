import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SingleUser = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="d-flex align-items-center justify-content-start bg-card m-2">
      <div>
        <img id="portrait" src={props.userObj.image} alt="" />
      </div>
      <div>
        <p className="mb-0 fw-bold">{props.userObj.id}</p>
        <div className="d-flex m-0">
          <p className="mb-0">{props.userObj.firstName}</p>
          <p className="ms-2 mb-0">{props.userObj.lastName}</p>
        </div>
        <Button
          onClick={() => {
            dispatch({
              type: "GO_TO_DETAIL",
              payload: props.userObj,
            });
            navigate("/userDetails/");
          }}
          variant="primary p-1 mt-2"
        >
          Detail
        </Button>
      </div>
    </div>
  );
};

export default SingleUser;
