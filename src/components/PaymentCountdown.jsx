import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Timer from "../components/Timer";

const PaymentCountdown = () => {
  const newDate = useRef(new Date());

  const [currentHours, setCurrentHours] = useState(newDate.current.getHours());
  const [currentMinutes, setCurrentMinutes] = useState(newDate.current.getMinutes());
  const [currentSeconds, setCurrentSeconds] = useState(newDate.current.getSeconds());
  setInterval(() => {
    newDate.current = new Date();
    setCurrentHours(newDate.current.getHours());
    setCurrentMinutes(newDate.current.getMinutes());
    setCurrentSeconds(newDate.current.getSeconds());
  }, 1000);
  const nowTime = `${currentHours} : ${currentMinutes} : ${currentSeconds}`;
  useEffect(() => {
    // console.log(nowTime);
  });

  return (
    <>
      <Card className="p-2" style={{ width: 605, height: 96 }}>
        <Card.Body>
          <Row>
            <Col>
              <h6 className="fw-bold">Selesaikan Pembayaran Sebelum</h6>
              <p className="fw-normal date-now">{nowTime}</p>
            </Col>
            <Col>
              <Timer />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default PaymentCountdown;
