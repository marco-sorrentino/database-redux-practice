import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromGroupAction } from "./redux/action";

export const Group = (props) => {
  const seeGroup = useSelector((state) => state.list.list);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col>
          {seeGroup.map((el) => {
            return (
              <Card key={el.id}>
                <Card.Img
                  style={{ width: "200px" }}
                  variant="top"
                  src={el.image}
                />
                <Card.Body>
                  <Card.Title>
                    {el.firstName}, {el.lastName}
                  </Card.Title>
                  <Card.Text>{el.university}</Card.Text>
                  <Button
                    onClick={() => {
                      dispatch(removeFromGroupAction(props));
                    }}
                    variant="danger"
                  >
                    REMOVE
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
