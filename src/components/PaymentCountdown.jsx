import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const PaymentCountdown = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <h5 className="fw-bold">Selesaikan Pembayaran Sebelum</h5>
              <h6 className="fw-light">Rabu, 19 Mei 2022 jam 13.00 WIB</h6>
            </Col>
            <Col></Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default PaymentCountdown;
