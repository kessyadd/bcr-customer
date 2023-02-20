import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/payment.css";
import { selectBank, setBank } from "../store/features/rentSlice";
import CHECK from "../assets/img/check.png";
import { Card, Col, Row } from "react-bootstrap";

const ChoosePayment = () => {
  const dispatch = useDispatch();
  const bankChoosed = useSelector(selectBank);

  return (
    <>
      <Card className="choose-payment">
        <Card.Body style={{ paddingLeft: "2rem" }}>
          <Card.Title>Pilih Bank Transfer</Card.Title>
          <Card.Text style={{ fontWeight: "normal" }}>
            Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
            atau Mobile Banking
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item
              action
              as="li"
              active={false}
              onClick={() => {
                dispatch(setBank("bca"));
              }}
              style={{ paddingLeft: "0" }}
            >
              <Row
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Col
                  style={{
                    fontWeight: "normal",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid #D0D0D0",
                      borderRadius: "4px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      marginRight: "10px",
                      width: "70px",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    BCA
                  </div>
                  BCA Transfer
                </Col>
                <Col>
                  {bankChoosed === "bca" ? (
                    <img src={CHECK} alt="checked" style={{ float: "right" }} />
                  ) : null}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              action
              as="li"
              active={false}
              onClick={() => {
                dispatch(setBank("bni"));
              }}
              style={{ paddingLeft: "0" }}
            >
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col
                  style={{
                    fontWeight: "normal",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid #D0D0D0",
                      borderRadius: "4px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      marginRight: "10px",
                      width: "70px",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    BNI
                  </div>
                  BNI Transfer
                </Col>
                <Col>
                  {bankChoosed === "bni" ? (
                    <img src={CHECK} alt="checked" style={{ float: "right" }} />
                  ) : null}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              action
              as="li"
              active={false}
              onClick={() => {
                dispatch(setBank("mandiri"));
              }}
              style={{ paddingLeft: "0" }}
            >
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col
                  style={{
                    fontWeight: "normal",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid #D0D0D0",
                      borderRadius: "4px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      marginRight: "10px",
                      width: "70px",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    Mandiri
                  </div>
                  Mandiri Transfer
                </Col>
                <Col>
                  {bankChoosed === "mandiri" ? (
                    <img src={CHECK} alt="checked" style={{ float: "right" }} />
                  ) : null}
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default ChoosePayment;
