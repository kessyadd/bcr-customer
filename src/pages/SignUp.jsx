import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../assets/css/signIn.css";
import APIRegis from "../apis/customer/APIRegistration";
import Desktop from "../assets/img/Group83.png";
import GrayButton from "../assets/img/rectangle.png";

const SignUp = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const onFinish = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const role = "Customer";

    const payload = {
      email,
      password,
      role,
    };
    const handleRegister = async () => {
      try {
        await APIRegis.register(payload);
        alert("You're registered!");
        let returnTo = "/sign-in";
        const params = new URLSearchParams(search);
        const redirectTo = params.get("return_to");
        if (redirectTo) returnTo += `${redirectTo}`;
        setTimeout(() => {
          navigate(returnTo);
        }, 1000);
        console.log(payload);
      } catch (error) {
        const err = new Error(error);
        console.log(err);
      }
    };
    handleRegister();
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
                <h1 className="fw-bold fs-2 mt-4 mb-4">Sign Up</h1>
              </Col>
              <Col lg={12}>
                <Form
                  className="form"
                  onSubmit={onFinish}
                  style={{
                    width: 370,
                    height: 487,
                  }}
                >
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className="fw-semibold">Name*</Form.Label>
                    <Form.Control style={{ borderRadius: 5 }} type="name" placeholder="Nama Lengkap" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-semibold">Email*</Form.Label>
                    <Form.Control style={{ borderRadius: 5 }} type="email" name="email" placeholder="Contoh: johndoe@gmail.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-semibold">Password*</Form.Label>
                    <Form.Control style={{ borderRadius: 5 }} type="password" name="password" placeholder="6+ karakter" />
                  </Form.Group>
                  <div className="d-grid">
                    <button className="button-register" variant="primary" type="submit" size="lg">
                      Sign Up
                    </button>
                  </div>
                  <h6 className="mt-4 fw-semibold redirect">
                    Already have an account? <a href="/sign-in">Sign In here</a>
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

export default SignUp;
