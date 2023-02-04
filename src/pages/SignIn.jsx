import React, { useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../assets/css/signIn.css";
import Desktop from "../assets/img/Group83.png";
import GrayButton from "../assets/img/rectangle.png";

const SignIn = () => {
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
                  <h6 className="mt-4 fw-bolder">
                    Don’t have an account? <a href="#">Sign Up for free</a>
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
