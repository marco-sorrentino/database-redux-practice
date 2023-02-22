import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CounterCards } from "./CounterCards";
import { SeeGroup } from "./SeeGroup";
import SingleUser from "./SingleUser";

const UserList = (props) => {
  const [users, setUsers] = useState();
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch("https://dummyjson.com/users");

      if (res.ok) {
        const data = await res.json();
        const users = data.users;
        console.log(users);
        setUsers(users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <CounterCards counter={users?.length} />
      <SeeGroup />
      <Row>
        {users?.map((el) => {
          return (
            <Col key={el.id}>
              <SingleUser userObj={el} />
            </Col>
          );
        })}
        {loading && (
          <Spinner animation="border" variant="info" className="mt-3" />
        )}
      </Row>
    </Container>
  );
};

export default UserList;
