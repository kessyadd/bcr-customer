import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../assets/css/signIn.css";
import APIAuth from "../apis/customer/APIAuth";

import GrayButton from "../assets/img/rectangle.png";

const SignIn = () => {
  const navigate = useNavigate();
  const onFinish = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const password = formData.get("password");

    const payload = {
      name,
      password,
    };
    const handleSubmit = async () => {
      try {
        await APIAuth.login(payload);
        let returnTo = "/";
        setTimeout(() => {
          navigate(returnTo);
        }, 2000);
      } catch (error) {}
    };
    handleSubmit();
    console.log(e);
  };

  return (
    <>
      <Container className="container-fluid">
        <Row>
          <Col lg={6} className="sign-in p-5 justify-items-center" style={{ display: "flex", alignItems: "center" }}>
            <Row>
              <Col lg={12}>
                <img src={GrayButton} alt="gray" />
              </Col>
              <Col lg={12}>
                <h1 className="fw-bold fs-2 mt-4 mb-4">Welcome Back!</h1>
              </Col>
              <Col lg={12}>
                <Form onSubmit={onFinish}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Contoh: johndoe@gmail.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="6+ karakter" />
                  </Form.Group>
                  <div className="d-grid">
                    <Button className="button-register" variant="primary" type="submit" size="lg">
                      Sign In
                    </Button>
                  </div>
                  <h6 className="mt-4 fw-bolder">
                    Don't have an account? <a href="/sign-up">Sign Up for free</a>
                  </h6>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="binar-sign-in">
            <div className="desktop"></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignIn;
