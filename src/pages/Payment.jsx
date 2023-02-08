import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import dayjs from "dayjs";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../assets/css/payment.css";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { STEPS, selectStepPayment, setStep, setMethod, setInvoice } from "../store/features/rentSlice";
import ChoosePayment from "../components/ChoosePayment";
import TotalCost from "../components/TotalCost";

const Payment = () => {
  const step = useSelector(selectStepPayment);
  const dispatch = useDispatch();

  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  React.useEffect(() => {
    return () => {
      if (step !== STEPS.CONFIRM_PAYMENT && !isPaymentSuccess) {
        dispatch(setStep(STEPS.SELECT_DATE));
      }
    };
  }, []);

  return (
    <>
      {step === STEPS.SELECT_DATE && (
        <Container>
          <Container>
            <Card>
              <Row className="m-5">
                <h6>Detail Pesananmu</h6>
                <Col lg={3} sm={12} className="pt-3">
                  <h6>Nama/Tipe Mobil</h6>
                </Col>
                <Col lg={3} sm={12} className="pt-3">
                  <h6>Kategori</h6>
                </Col>
                <Col lg={3} sm={12} className="pt-3">
                  <h6>Tanggal Mulai Sewa</h6>
                </Col>
                <Col lg={3} sm={12} className="pt-3">
                  <h6>Tanggal Akhir Sewa</h6>
                </Col>
                <Col lg={3} sm={12} className="pt-3">
                  <h6 className="text-black-50">Innova</h6>
                </Col>
                <Col lg={3} sm={12} className="pt-3">
                  <h6 className="text-black-50">6 - 8 orang</h6>
                </Col>
                <Col lg={3} sm={12} className="pt-3">
                  <h6 className="text-black-50">2 Jun 2022</h6>
                </Col>
                <Col lg={3} sm={12} className="pt-3">
                  <h6 className="text-black-50">8 Jun 2022</h6>
                </Col>
              </Row>
            </Card>
          </Container>
          <Row>
            <Col xs={12} md={8}>
              <ChoosePayment />
            </Col>
            <Col xs={6} md={4}>
              <TotalCost />
            </Col>
          </Row>
        </Container>
      )}
      {step === STEPS.SELECT_METHOD && (
        <Form>
          {["radio"].map((type) => (
            <div key={`default-${type}`} onChange={(value) => dispatch(setMethod(value.target.value))} className="mb-3 choose">
              <ListGroup.Item variant="light">
                <Form.Check label="BCA Transfer" value="BCA" name="group1" type={type} id={`BCA Transfer`} />
              </ListGroup.Item>
              <ListGroup.Item variant="light">
                <Form.Check label="BNI Transfer" value="BNI" name="group1" type={type} id={`BNI Transfer`} />
              </ListGroup.Item>
              <ListGroup.Item variant="light">
                <Form.Check label="Mandiri Transfer" value="Mandiri" name="group1" type={type} id={`inline-${type}-2`} />
              </ListGroup.Item>
            </div>
          ))}
        </Form>
      )}
      {step === STEPS.CONFIRM_PAYMENT && (
        <div>
          <h1>Confirm Payment</h1>
          <h2>Upload bukti pembayaran</h2>
          <input
            type="file"
            onChange={(e) => {
              console.log(e.target.files);
              dispatch(setInvoice(e.target.files[0]));
            }}
          />
          <button
            type="button"
            onClick={() => {
              dispatch(setStep(STEPS.PAYMENT_SUCCESS));
              setIsPaymentSuccess(true);
            }}
          >
            Confirm Payment
          </button>
        </div>
      )}
      {step === STEPS.PAYMENT_SUCCESS && (
        <div>
          <h1>Payment Success</h1>
          <Link to="/">Back to Home</Link>
        </div>
      )}
    </>
  );
};

export default Payment;
