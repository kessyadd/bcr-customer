import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../assets/css/signIn.css";
import APIAuth from "../apis/customer/APIAuth";
import GrayButton from "../assets/img/rectangle.png";

const SignIn = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const onFinish = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const payload = {
      email,
      password,
    };
    const handleSubmit = async () => {
      try {
        await APIAuth.login(payload);
        alert("Login Success!");
        let returnTo = "/";
        const params = new URLSearchParams(search);
        const redirectTo = params.get("return_to");
        if (redirectTo) returnTo += `${redirectTo}`;
        setTimeout(() => {
          navigate(returnTo);
        }, 1000);
      } catch (error) {
        const err = new Error(error);
        console.log(err);
      }
    };
    handleSubmit();
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
                <Form
                  onSubmit={onFinish}
                  style={{
                    width: 370,
                    height: 487,
                  }}
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-semibold">Email</Form.Label>
                    <Form.Control style={{ borderRadius: 5 }} type="email" name="email" placeholder="Contoh: johndoe@gmail.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-semibold">Password</Form.Label>
                    <Form.Control style={{ borderRadius: 5 }} type="password" name="password" placeholder="6+ karakter" />
                  </Form.Group>
                  <div className="d-grid">
                    <button className="button-register" variant="primary" type="submit" size="lg">
                      Sign In
                    </button>
                  </div>
                  <h6 className="mt-4 fw-semibold redirect text-center">
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
