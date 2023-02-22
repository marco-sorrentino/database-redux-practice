import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Group = () => {
  const seeGroup = useSelector((state) => state.list);
  return (
    <Container>
      <Row>
        <Col>
          {seeGroup.map((el) => {
            return (
              <Card>
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
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
