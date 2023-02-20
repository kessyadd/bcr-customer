import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { STEPS, setStep } from "../store/features/rentSlice";
import { useDispatch } from "react-redux";
import { ListGroupItem, Row, Col } from "react-bootstrap";
import "../assets/css/payment.css";
import * as Icon from "react-feather";

const RincianBiaya = ({ carName, totalPrice, carPrice, carCategory, totalDays }) => {
  const dispatch = useDispatch();
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <div className="m-5">
      <Card className="total">
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h6 className="fw-bold ms-1">{carName}</h6>
              <h6 className="text-black-50 ms-1">
                <Icon.Users size={15} /> <span></span>
                {carCategory === "small" && "2 - 4 orang"}
                {carCategory === "medium" && "4 - 6 orang"}
                {carCategory === "Medium" && "4 - 6 orang"}
                {carCategory === "large" && "6 - 8 orang"}
              </h6>
              <div>
                <Row className="mt-2">
                  <Col>
                    <h6>Total</h6>
                  </Col>
                  <Col>
                    <h6 className="text-end fw-bolder">{formatter.format(totalPrice)}</h6>
                  </Col>
                </Row>
                <div>
                  <Row>
                    <Col>
                      {" "}
                      <h6 className="fw-bold">Harga</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {" "}
                      <ul>
                        <li className="fs-6 fw-normal text-dark">
                          Sewa Mobil {formatter.format(carPrice)} x {totalDays} Hari
                        </li>
                      </ul>
                    </Col>
                    <Col>
                      {" "}
                      <h6 className="text-end fw-normal">{formatter.format(totalPrice)}</h6>
                    </Col>
                  </Row>
                </div>
                <div>
                  <h6 className="fw-bold">Biaya Lainnya</h6>
                  <Row>
                    <Col>
                      {" "}
                      <ul>
                        <li className="fs-6 fw-normal text-dark">Pajak</li>
                        <li className="fs-6 fw-normal text-dark">Biaya makan sopir</li>
                      </ul>
                    </Col>
                    <Col>
                      <h6 style={{ color: "#5CB85F" }} className="fw-normal text-end">
                        Termasuk
                      </h6>
                      <h6 style={{ color: "#5CB85F" }} className="fw-normal text-end">
                        Termasuk
                      </h6>
                    </Col>
                  </Row>
                </div>
                <h6 className="fw-bold">Belum Termasuk</h6>
                <ul>
                  <li className="fs-6 fw-normal text-dark">Bensin</li>
                  <li className="fs-6 fw-normal text-dark">Tol parkir</li>
                </ul>
              </div>
            </ListGroup.Item>
            <ListGroupItem>
              <div>
                <Row>
                  <Col>
                    <h6 className="text-start fw-bold">Total</h6>
                  </Col>
                  <Col>
                    <h6 className="text-end fw-bold">{formatter.format(totalPrice)}</h6>
                  </Col>
                  <Col>
                    <button className="green-button justify-content-center mt-2" variant="success" onClick={() => dispatch(setStep(STEPS.CONFIRM_PAYMENT))}>
                      Bayar
                    </button>
                  </Col>
                </Row>
              </div>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RincianBiaya;
