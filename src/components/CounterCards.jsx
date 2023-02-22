import { Col, Container, Row } from "react-bootstrap";

export const CounterCards = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <p className="fw-bold">Utenti iscritti: {props.counter}</p>
        </Col>
      </Row>
    </Container>
  );
};
