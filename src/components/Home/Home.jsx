import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import Layout from "../Layout/Layout";

const Home = () => {
  const [values, setVaules] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });
  const [users, setusers] = useState([]);
  const getAllUsers = async () => {
    const res = await axios.get("http://localhost:3001/api/user/getAllUsers");

    if (res.data) {
      setusers(res.data.users);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleChange = (e) => {
    console.log("field type =>", e.target.name, e.target.value);
    const { name, value } = e.target;

    setVaules({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:3001/api/user/signup",
      values,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    getAllUsers();
  };
  console.log("users =>", users);
  return (
    <Layout>
      <div>
        <h3>Home</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              type="text"
              placeholder="FirstName"
              name="firstName"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>LastName</Form.Label>
            <Form.Control
              type="text"
              placeholder="LastName"
              name="lastName"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
