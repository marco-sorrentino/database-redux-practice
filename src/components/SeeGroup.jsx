import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SeeGroup = () => {
  const showList = useSelector((state) => state.list.list);
  return (
    <Container>
      <Row>
        <Col>
          <p>
            Guarda insieme, utenti selezionati:{" "}
            <Link to={"/group"}>{showList.length}</Link>{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};
