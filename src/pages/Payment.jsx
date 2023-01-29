import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import ChoosePayment from "../components/ChoosePayment";

import TotalCost from "../components/TotalCost";

const Payment = () => {
  return (
    <div className="mx-auto">
      <Card>
        <Row className="m-5">
          <Col lg={3} sm={12} className="pt-3">
            d
          </Col>
          <Col lg={3} sm={12} className="pt-3">
            d
          </Col>
          <Col lg={3} sm={12} className="pt-3">
            d
          </Col>
          <Col lg={3} sm={12} className="pt-3">
            d
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
