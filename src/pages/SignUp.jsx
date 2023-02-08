import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../assets/css/signIn.css";
import Desktop from "../assets/img/Group83.png";
import GrayButton from "../assets/img/rectangle.png";

const SignUp = () => {
  return (
    <>
      <Container className="container-fluid">
        <Row>
          <Col lg={6} className="sign-in">
            <div className="d-inline-block">
              <img src={GrayButton} alt="gray" />
              <div className="fw-bold fs-2 mt-4 mb-4">Sign Up</div>
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
            </div>
          </Col>
          <Col lg={6} className="binar-sign-in">
            <div className="desktop">
              <img src={Desktop} alt="desktop" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
