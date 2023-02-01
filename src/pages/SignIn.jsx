import React, { useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../assets/css/signIn.css";
import Desktop from "../assets/img/desktop.png";
// import GrayButton from "../img/gray_rectangle.png";

const SignIn = () => {
  return (
    <>
      <div className="container">
        <Container>
          <Row>
            <Col md={6} className="sign-in" style={{ width: 370 }}>
              {/* <img src={GrayButton} alt="gray" /> */}
              <div className="fw-bold fs-1">Welcome Back!</div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control o type="email" placeholder="Contoh: johndoe@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="6+ karakter" />
                </Form.Group>
                <div className="d-grid">
                  <Button className="button-register" variant="primary" type="submit" size="lg">
                    Sign In
                  </Button>
                </div>

                <div className="mt-4 fw-bolder">
                  Don’t have an account? <a href="#">Sign Up for free</a>
                </div>
              </Form>
            </Col>
            <Col className="binar-sign-in" style={{ width: "100%", height: "100%" }} md={6}>
              <h1>Binar Car Rental</h1>
              <div className="desktop">
                <img src={Desktop} alt="desktop" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SignIn;
