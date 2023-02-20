import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectBank } from "../store/features/rentSlice";

const Rekening = ({ amountTransfer }) => {
  const bank = useSelector(selectBank);

  return (
    <>
      <Card className="p-2 mt-3 justify-content-center" style={{ width: 605, height: 278 }}>
        <Card.Body>
          <Row>
            <Col>
              <h6 className="fw-bold">Lakukan Transfer Ke</h6>
              <Row>
                <Col>
                  <h6 style={{ border: "1px solid #D0D0D0", borderRadius: 6, width: 60, height: 40 }} className="d-flex align-items-center fw-normal">
                    {bank === "bca" && "BCA"}
                    {bank === "bni" && "BNI"}
                    {bank === "mandiri" && "Mandiri"}
                  </h6>
                </Col>
                <Col>
                  <h6 className="fw-normal me-5">
                    {bank === "bca" && "BCA Transfer a.n Binar Car Rental"}
                    {bank === "bni" && "BNI Transfer a.n Binar Car Rental"}
                    {bank === "mandiri" && "Transfer a.n Binar Car Rental"}
                  </h6>
                </Col>
                <Col></Col>
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
