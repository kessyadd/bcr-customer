import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const Rekening = () => {
  return (
    <>
      <Card className="p-3 mt-3">
        <Card.Body>
          <Row>
            <Col>
              <h5>Lakukan Transfer Ke</h5>
              <Row>
                <Col>BCA Transfer</Col>
              </Row>
              <Row className="mt-3">
                <h6 className="fw-light">Nomor Rekening</h6>
                <Card className="p-0">
                  <Card.Body>54104257877</Card.Body>
                </Card>
              </Row>
              <Row>
                <h6 className="fw-light">Total Bayar</h6>
                <Card className="p-0">
                  <Card.Body>Rp 3.500.000</Card.Body>
                </Card>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Rekening;
