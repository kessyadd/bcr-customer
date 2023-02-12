import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../assets/css/payment.css";
import APIOrder from "../apis/customer/APIOrder";
import { useDispatch, useSelector } from "react-redux";
import { STEPS, selectStepPayment, setStep, setMethod } from "../store/features/rentSlice";
import ChoosePayment from "../components/ChoosePayment";
import TotalCost from "../components/TotalCost";
import PaymentCountdown from "../components/PaymentCountdown";
import Rekening from "../components/Rekening";
import Instruction from "../components/Instruction";
import Button from "react-bootstrap/Button";
import ButtonUpload from "../components/ButtonUpload";
import Figure from "react-bootstrap/Figure";
import UploadPayment from "../assets/img/frame39.png";
import { useParams } from "react-router";

const Payment = () => {
  const step = useSelector(selectStepPayment);
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const [invoiceImage, setInvoiceImage] = useState();
  console.log(orderId);
  const [orderData, setOrderData] = useState();

  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const handleFile = (file) => {
    setInvoiceImage(file);
  };

  React.useEffect(() => {
    return () => {
      if (step !== STEPS.CONFIRM_PAYMENT && !isPaymentSuccess) {
        dispatch(setStep(STEPS.SELECT_DATE));
      }
    };
  }, []);

  React.useEffect(() => {
    const fetchOrderData = async (orderId) => {
      try {
        const result = await APIOrder.getOrderDetails(orderId);
        console.log(result);
        if (result.data) {
          setOrderData(result.data.data);
          console.log(orderData);
        }
      } catch (error) {}
    };
    fetchOrderData(orderId);
  }, [orderId]);

  const RenderPayment = () => {
    if (orderData) {
      return (
        <>
          {step === STEPS.SELECT_DATE && (
            <Container className="mt-3 ">
              <Container className="d-flex justify-content-center">
                <Card style={{ width: 1042, height: 124 }}>
                  <Row className="d-flex justify-content-center">
                    <Row className="mt-3 ms-2">
                      <h6 className="d-flex">Detail Pesananmu</h6>
                    </Row>
                    <Row className="d-flex justify-content-center">
                      <Col lg={3} sm={12} className="pt-2 ps-4">
                        <h6>Nama/Tipe Mobil</h6>
                      </Col>
                      <Col lg={3} sm={12} className="pt-2 ps-4">
                        <h6>Kategori</h6>
                      </Col>
                      <Col lg={3} sm={12} className="pt-2 ps-4">
                        <h6>Tanggal Mulai Sewa</h6>
                      </Col>
                      <Col lg={3} sm={12} className="pt-2 ps-4">
                        <h6>Tanggal Akhir Sewa</h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={3} sm={12}>
                        <h6 className="text-black-50 ps-3">{orderData.car.name}</h6>
                      </Col>
                      <Col lg={3} sm={12}>
                        <h6 className="text-black-50 ps-3">6 - 8 orang</h6>
                      </Col>
                      <Col lg={3} sm={12}>
                        <h6 className="text-black-50 ps-3">2 Jun 2022</h6>
                      </Col>
                      <Col lg={3} sm={12}>
                        <h6 className="text-black-50 ps-3">8 Jun 2022</h6>
                      </Col>
                    </Row>
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

          {step === STEPS.CONFIRM_PAYMENT && (
            <Container className="mt-3">
              <Row>
                <Col>
                  <PaymentCountdown />
                  <Rekening />
                  <Instruction />
                </Col>
                <Col>
                  <Card style={{ width: 405, height: 148 }}>
                    <Card.Body className="p-3">
                      <h6 className="fs-6 mb-4">Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</h6>
                      <div className="d-grid">
                        <Button variant="success" onClick={() => dispatch(setStep(STEPS.PAYMENT_SUCCESS))}>
                          Konfirmasi Pembayaran
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          )}
          {step === STEPS.PAYMENT_SUCCESS && (
            <Container className="mt-3">
              <Row>
                <Col>
                  <PaymentCountdown />
                  <Rekening />
                  <Instruction />
                </Col>
                <Col>
                  <Card style={{ width: 405, height: 474 }}>
                    <Card.Body className="p-3">
                      <Row>
                        <h5 className="fw-bold">Konfirmasi Pembayaran</h5>
                      </Row>
                      <Row>
                        <h6 className="fw-normal ">Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</h6>
                      </Row>
                      <Row>
                        <h5 className="fw-bold">Upload Bukti Pembayaran</h5>
                      </Row>
                      <Row>
                        <h6 className="fw-normal ">Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</h6>
                      </Row>
                      <Row>
                        <Figure className="align-item-center">{invoiceImage ? <Figure.Image width={296} height={162} alt="Invoice" src={invoiceImage} /> : <Figure.Image width={296} height={162} alt="Invoice" src={UploadPayment} />}</Figure>
                      </Row>
                      <div className="d-grid">
                        <ButtonUpload handleFile={handleFile} />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          )}
        </>
      );
    }
  };
  return {orderData  && <RenderPayment />   };
};

export default Payment;
