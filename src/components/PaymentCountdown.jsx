import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const PaymentCountdown = () => {
  return (
    <>
      <Card className="p-2" style={{ width: 605, height: 96 }}>
        <Card.Body>
          <Row>
            <Col>
              <h6 className="fw-bold">Selesaikan Pembayaran Sebelum</h6>
              <h6 className="fw-normal">Rabu, 19 Mei 2022 jam 13.00 WIB</h6>
            </Col>
            <Col></Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default PaymentCountdown;
