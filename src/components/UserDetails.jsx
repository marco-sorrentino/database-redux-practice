import { Container, Row, Col, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const UserDetails = (props) => {
  const userDetail = useSelector((state) => state.users);
  useEffect(() => {}, []);
  return (
    <Container>
      <Row>
        <Col>
          {userDetail.map((el, i) => {
            return (
              <div key={i} className="d-flex justify-content-center mt-5">
                <div>
                  <img src={el.image} alt="" />
                </div>
                <div>
                  <p>
                    <Badge bg="primary">Name:</Badge> {el.firstName}
                  </p>
                  <p>
                    <Badge bg="primary">Lastname:</Badge> {el.lastName}
                  </p>
                  <p>
                    <Badge bg="primary">Age:</Badge> {el.age}
                  </p>
                  <p>
                    <Badge bg="primary">Gender:</Badge> {el.gender}
                  </p>
                  <p>
                    <Badge bg="primary">Email:</Badge> {el.email}
                  </p>
                  <p>
                    <Badge bg="primary">Phone:</Badge> {el.phone}
                  </p>
                  <p>
                    <Badge bg="primary">Birthday:</Badge> {el.birthDate}
                  </p>
                  <p>
                    <Badge bg="primary">Height:</Badge> {el.height}
                  </p>
                  <p>
                    <Badge bg="primary">Weight:</Badge> {el.weight}
                  </p>
                  <p>
                    <Badge bg="primary">Univerity:</Badge> {el.university}
                  </p>
                  <p>
                    <Badge bg="primary">City:</Badge> {el.company.address.city}
                  </p>
                  <p>
                    <Badge bg="primary">Address:</Badge>{" "}
                    {el.company.address.address}
                  </p>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetails;
