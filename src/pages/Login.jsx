import React, { useState, useContext } from "react";
import "../Styles/Login.css";
import { Container, Row, Col, Button, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { AuthContext } from "../Context/authContext";
import { BASE_URL } from "../Utils/config";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok) alert(result.message);
      console.log(result.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8" className=" m-auto">
              <div className="login_container d-flex justify-content-between">
                <div className="login_img">
                  <img src={loginImg}alt=""></img>
                </div>
                <div className="login_form">
                  <div className="user">
                    <img src={userIcon}alt=""></img>
                    <h2>Login</h2>

                    <Form onSubmit={handleClick}>
                      <FormGroup>
                        <input
                          type="text"
                          placeholder="Email"
                          id="email"
                          required
                          onChange={handleChange}
                        ></input>
                      </FormGroup>
                      <FormGroup>
                        <input
                          type="password"
                          placeholder="password"
                          id="password"
                          required
                          onChange={handleChange}
                        ></input>
                      </FormGroup>
                      <button
                        className="btn secondary_btn auth_btn"
                        type="submit"
                      >
                        Submit
                      </button>
                    </Form>
                    <p>
                      Don't have an account <Link to="/register">Create</Link>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
