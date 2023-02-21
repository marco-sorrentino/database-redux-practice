import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const UserDetails = (props) => {
  const userDetail = useSelector((state) => state.users);
  return (
    <Container>
      <Row>
        <Col>
          {userDetail.map((el, i) => {
            return (
              <div key={i}>
                <div>
                  <img src={el.image} alt="" />
                </div>
                <div>
                  <p>{el.firstName}</p>
                  <p>{el.lastName}</p>
                  <p>{el.age}</p>
                  <p>{el.gender}</p>
                  <p>{el.email}</p>
                  <p>{el.phone}</p>
                  <p>{el.birthDate}</p>
                  <p>{el.height}</p>
                  <p>{el.weight}</p>
                  <p>{el.university}</p>
                  <p>{el.company.address.city}</p>
                  <p>{el.company.address.address}</p>
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
