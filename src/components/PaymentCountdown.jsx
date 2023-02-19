import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Countdown from "../components/Countdown";

const PaymentCountdown = () => {
  const current = new Date();
  const date = `${current.getDate() + 1}/${current.getMonth() + 1}/${current.getFullYear()}`;

  return (
    <>
      <Card className="p-2" style={{ width: 605, height: 96 }}>
        <Card.Body>
          <Row>
            <Col>
              <h6 className="fw-bold">Selesaikan Pembayaran Sebelum</h6>
              <p className="fw-normal date-now">{date}</p>
            </Col>
            <Col className="justify-content-end">
              <Countdown />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default PaymentCountdown;
