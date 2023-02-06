import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../assets/css/payment.css";

import ChoosePayment from "../components/ChoosePayment";

import TotalCost from "../components/TotalCost";

const Payment = () => {
  return (
    <>
      <Container className="container pemesanan justify-content-center mt-5" style={{ width: 1042 }}>
        <Card>
          <Row className="m-5">
            <h6>Detail Pesananmu</h6>
            <Col lg={3} sm={12} className="pt-3">
              <h6>Nama/Tipe Mobil</h6>
            </Col>
            <Col lg={3} sm={12} className="pt-3">
              <h6>Kategori</h6>
            </Col>
            <Col lg={3} sm={12} className="pt-3">
              <h6>Tanggal Mulai Sewa</h6>
            </Col>
            <Col lg={3} sm={12} className="pt-3">
              <h6>Tanggal Akhir Sewa</h6>
            </Col>
            <Col lg={3} sm={12} className="pt-3">
              <h6 className="text-black-50">Innova</h6>
            </Col>
            <Col lg={3} sm={12} className="pt-3">
              <h6 className="text-black-50">6 - 8 orang</h6>
            </Col>
            <Col lg={3} sm={12} className="pt-3">
              <h6 className="text-black-50">2 Jun 2022</h6>
            </Col>
            <Col lg={3} sm={12} className="pt-3">
              <h6 className="text-black-50">8 Jun 2022</h6>
            </Col>
          </Row>
        </Card>
      </Container>
      <Row>
        <Col xs={12} md={8}>
          <ChoosePayment />
        </Col>
        <Col xs={6} md={4}>
          <TotalCost />
        </Col>
      </Row>
    </>
  );
};

export default Payment;
