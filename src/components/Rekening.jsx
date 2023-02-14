import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const Rekening = ({ amountTransfer }) => {
  return (
    <>
      <Card className="p-2 mt-3 justify-content-center" style={{ width: 605, height: 278 }}>
        <Card.Body>
          <Row>
            <Col>
              <h6 className="fw-bold">Lakukan Transfer Ke</h6>
              <Row>
                <Col>
                  <h6 className="fw-normal">BCA Transfer</h6>
                </Col>
              </Row>
              <Row className="mt-3">
                <h6 className="fw-light">Nomor Rekening</h6>
                <Card className="p-0 justify-content-center" style={{ width: 557, height: 36 }}>
                  <Card.Body>54104257877</Card.Body>
                </Card>
              </Row>
              <Row>
                <h6 className="fw-light mt-4">Total Bayar</h6>
                <Card className="p-0 justify-content-center" style={{ width: 557, height: 36 }}>
                  <Card.Body>Rp.{amountTransfer}</Card.Body>
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
