import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { STEPS, setStep } from "../store/features/rentSlice";
import { useDispatch } from "react-redux";
import { Accordion, ListGroupItem, Row, Col } from "react-bootstrap";
import "../assets/css/payment.css";

const RincianBiaya = () => {
  const dispatch = useDispatch();
  return (
    <div className="m-5">
      <Card className="total">
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h6 className="fw-bold ms-1">Innova</h6>
              <h6 className="text-black-50 ms-1">6 - 8 orang</h6>
              <div>
                <div>
                  <h6 className="fw-bold">Harga</h6>
                  <ul>
                    <li className="fs-6 fw-normal text-dark">Sewa Mobil Rp.500.000 x 7 Hari</li>
                  </ul>
                </div>
                <div>
                  <h6 className="fw-bold">Biaya Lainnya</h6>
                  <ul>
                    <li className="fs-6 fw-normal text-dark">Pajak</li>
                    <li className="fs-6 fw-normal text-dark">Biaya makan sopir</li>
                  </ul>
                </div>
                <h6 className="fw-bold">Belum Termasuk</h6>
                <ul>
                  <li className="fs-6 fw-normal text-dark">Bensin</li>
                  <li className="fs-6 fw-normal text-dark">Tol parkir</li>
                </ul>
              </div>
            </ListGroup.Item>
            <ListGroupItem>
              <div className="m-2">
                <Row>
                  <Col>
                    <h6 className="text-start fw-bold">Total</h6>
                  </Col>
                  <Col>
                    <h6 className="text-end fw-bold">Rp 3.500.000</h6>
                  </Col>
                </Row>
              </div>
              <div className="d-grid">
                <Button variant="success" onClick={() => dispatch(setStep(STEPS.CONFIRM_PAYMENT))}>
                  Bayar
                </Button>{" "}
              </div>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RincianBiaya;
