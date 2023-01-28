import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import ChoosePayment from "../components/ChoosePayment";

import TotalCost from "../components/TotalCost";

const Payment = () => {
  return (
    <div className="mx-auto">
      {/* <Container fluid>
        <Row>
          <BackButton />
          <h1 className="fs-5 d-inline ">Pembayaran</h1>
        </Row>
        <Row>
          <Card>
            <Card.Body>
              <Col>
                <Row>
                  <h1 className="fs-4">Detail Pesananmu</h1>
                </Row>
                <h1 className="   fw-semibold fs-5">Nama/Tipe Mobil</h1>
                <h1 className="fw-light fs-6">Innova</h1>
              </Col>
              <Col className="text-end">
                <h1>kategori</h1>
              </Col>
            </Card.Body>
          </Card>
        </Row>
        <Col>
          <h1>s</h1>
        </Col>
      </Container> */}{" "}
      <Card>
        <Row className="m-5">
          <Col lg={3} sm={12} className="pt-3">
            <h1 className="fs-4">Detail Pesananmu</h1>
            <h1 className="   fw-semibold fs-5">Nama/Tipe Mobil</h1>
            <h1 className="fw-light fs-6">Innova</h1>
          </Col>
          <Col lg={3} sm={12} className="pt-3">
            <ul className="p-0 list-unstyled menu">
              <li className="mb-3">
                <a href="/#ourServices">Our Services</a>
              </li>
              <li className="mb-3">
                <a href="/#whyUs">Why Us</a>
              </li>
              <li className="mb-3">
                <a href="/#testimonial">Testimonial</a>
              </li>
              <li className="mb-3">
                <a href="/#faq">FAQ</a>
              </li>
            </ul>
          </Col>
          <Col lg={3} sm={12} className="pt-3">
            <p>Connect With Us</p>
          </Col>
          <Col lg={3} sm={12} className="pt-3">
            <p>Copyright Binar 2022</p>
          </Col>
        </Row>
      </Card>
      <Row>
        <Col xs={12} md={8}>
          <ChoosePayment />
        </Col>
        <Col xs={6} md={4}>
          <TotalCost />
        </Col>
      </Row>
    </div>
  );
};

export default Payment;
