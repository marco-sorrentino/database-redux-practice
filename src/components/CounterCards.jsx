import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

export const CounterCards = (props) => {
  const loading = useSelector((state) => state.user.loading);
  return (
    <Container>
      <Row>
        <Col>
          <p className="fw-bold">Utenti iscritti: {props.counter}</p>
          {loading && (
            <Spinner animation="border" variant="info" className="mt-3" />
          )}
        </Col>
      </Row>
    </Container>
  );
};
