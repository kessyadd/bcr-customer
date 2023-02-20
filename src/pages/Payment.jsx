import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../assets/css/payment.css";
import APIOrder from "../apis/customer/APIOrder";
import { useDispatch, useSelector } from "react-redux";
import { STEPS, selectStepPayment, setStep } from "../store/features/rentSlice";
import ChoosePayment from "../components/ChoosePayment";
import TotalCost from "../components/TotalCost";
import PaymentCountdown from "../components/PaymentCountdown";
import Rekening from "../components/Rekening";
import Instruction from "../components/Instruction";
import ButtonUpload from "../components/ButtonUpload";
import { useParams } from "react-router";
import * as Icon from "react-feather";
import CustomHemlet from "../components/CustomHelmet";
import ShortCountdown from "../components/ShortCountdown";
import Rect from "../assets/img/rect.svg";
import { useNavigate } from "react-router";

const Payment = () => {
  const step = useSelector(selectStepPayment);
  const dispatch = useDispatch();
  const { orderId } = useParams();
  console.log(orderId);
  const [orderData, setOrderData] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [totalDays, setTotalDays] = useState();
  const navigate = useNavigate;

  const backButton = () => {
    navigate(`/detil-mobil`);
  };

  React.useEffect(() => {
    const fetchOrderData = async (orderId) => {
      try {
        const result = await APIOrder.getOrderDetails(orderId);

        if (result.data) {
          setOrderData(result.data);
          console.log(result.data.start_rent_at);
          const startDateTemp = new Date(result.data.start_rent_at);
          const formatStartDate =
            startDateTemp.getDate() +
            "-" +
            (startDateTemp.getMonth() + 1) +
            "-" +
            startDateTemp.getFullYear();
          setStartDate(formatStartDate);
          const endDateTemp = new Date(result.data.finish_rent_at);
          const formatEndDate =
            endDateTemp.getDate() +
            "-" +
            (endDateTemp.getMonth() + 1) +
            "-" +
            endDateTemp.getFullYear();
          setEndDate(formatEndDate);

          let Difference_In_Time =
            endDateTemp.getTime() - startDateTemp.getTime();
          console.log(Difference_In_Time);
          let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
          console.log(Difference_In_Days);
          dispatch(setTotalDays(Difference_In_Days + 1));
        }
      } catch (error) {}
    };
    fetchOrderData(orderId);
  }, [orderId, dispatch]);

  const RenderPayment = () => {
    if (orderData) {
      console.log(orderData.Car.name);
      return (
        <>
          <CustomHemlet />
          {step === STEPS.SELECT_DATE && (
            <Container className="mt-3 ">
              <Container>
                <Row className="m-4">
                  <Col className="ms-5">
                    <button
                      style={{ border: "none", backgroundColor: "white" }}
                      onClick={backButton}
                    >
                      <Icon.ArrowLeft /> Pembayaran
                    </button>
                  </Col>
                  <div className="col-md-8">
                    <div className="state-payment">
                      <div className="oneone">1</div>
                      <h5 className="fs-6">Pilih Metode</h5>
                      <img src={Rect} />
                      <div className="onetwo">2</div>
                      <h5 className="fs-6">Bayar</h5>
                      <img src={Rect} />
                      <div className="onethree">3</div>
                      <h5 className="fs-6">Tiket</h5>
                    </div>
                  </div>
                </Row>
              </Container>
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
                        <h6 className="text-black-50 ps-3">
                          {orderData.Car.name}
                        </h6>
                      </Col>
                      <Col lg={3} sm={12}>
                        <h6 className="text-black-50 ps-3">
                          {orderData.Car.category === "small" && "2 - 4 orang"}
                          {orderData.Car.category === "medium" && "4 - 6 orang"}
                          {orderData.Car.category === "Medium" && "4 - 6 orang"}
                          {orderData.Car.category === "large" && "6 - 8 orang"}
                        </h6>
                      </Col>
                      <Col lg={3} sm={12}>
                        <h6 className="text-black-50 ps-3">{startDate} </h6>
                      </Col>
                      <Col lg={3} sm={12}>
                        <h6 className="text-black-50 ps-3">{endDate}</h6>
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
                  <TotalCost
                    carName={orderData.Car.name}
                    totalPrice={orderData.total_price}
                    carPrice={orderData.Car.price}
                    carCategory={orderData.Car.category}
                    totalDays={totalDays}
                  />
                </Col>
              </Row>
            </Container>
          )}

          {step === STEPS.CONFIRM_PAYMENT && (
            <Container className="mt-3">
              <Container>
                <Row className="m-4">
                  <Col className="ms-5">
                    <button
                      style={{ border: "none", background: "white" }}
                      onClick={() => dispatch(setStep(STEPS.SELECT_DATE))}
                    >
                      <Icon.ArrowLeft /> Pembayaran
                    </button>
                  </Col>
                  <Col className="me-5">
                    <div>
                      <div className="state-payment">
                        <div className="twoone">1</div>
                        <h5 className="fs-6">Pilih Metode</h5>
                        <img src={Rect} alt="-" />
                        <div className="twotwo">2</div>
                        <h5 className="fs-6">Bayar</h5>
                        <img src={Rect} alt="-" />
                        <div className="twothree">3</div>
                        <h5 className="fs-6">Tiket</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              <Row className="m-4">
                <Col className="ms-5">
                  <PaymentCountdown />
                  <Rekening amountTransfer={orderData.total_price} />
                  <Instruction />
                </Col>
                <Col>
                  <Card style={{ width: 405, height: 148 }}>
                    <Card.Body className="p-3">
                      <h6 className="fs-6 mb-4">
                        Klik konfirmasi pembayaran untuk mempercepat proses
                        pengecekan
                      </h6>
                      <div className="d-grid">
                        <button
                          className="green-button"
                          variant="success"
                          onClick={() =>
                            dispatch(setStep(STEPS.PAYMENT_SUCCESS))
                          }
                        >
                          Konfirmasi Pembayaran
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          )}
          {step === STEPS.PAYMENT_SUCCESS && (
            <Container className="mt-3 ">
              <Row className="d-flex justify-content-center">
                <Container>
                  <Row className="m-4">
                    <Col className="ms-5">
                      <button
                        style={{ border: "none", background: "white" }}
                        onClick={() => dispatch(setStep(STEPS.CONFIRM_PAYMENT))}
                      >
                        <h6>
                          <Icon.ArrowLeft /> BCA Transfer
                        </h6>
                      </button>
                      <h6>Order Id : {orderId}</h6>
                    </Col>
                    <Col>
                      <div className="col-md-8">
                        <div className="state-payment">
                          <div className="twoone">1</div>
                          <h5 className="fs-6">Pilih Metode</h5>
                          <img src={Rect} alt="-" />
                          <div className="twotwo">2</div>
                          <h5 className="fs-6">Bayar</h5>
                          <img src={Rect} alt="-" />
                          <div className="twothree">3</div>
                          <h5 className="fs-6">Tiket</h5>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
                <Container>
                  <Row className="m-4">
                    <Col className="ms-5">
                      <PaymentCountdown />
                      <Rekening amountTransfer={orderData.total_price} />
                      <Instruction />
                    </Col>
                    <Col>
                      <Card style={{ width: 405, height: 500 }}>
                        <Card.Body className="p-3">
                          <Row>
                            <Col>
                              <h6 className="fw-bold">Konfirmasi Pembayaran</h6>
                            </Col>
                            <Col>
                              <ShortCountdown />
                            </Col>
                          </Row>
                          <Row>
                            <h6 className="fw-normal ">
                              Terima kasih telah melakukan konfirmasi
                              pembayaran. Pembayaranmu akan segera kami cek
                              tunggu kurang lebih 10 menit untuk mendapatkan
                              konfirmasi.
                            </h6>
                          </Row>
                          <Row>
                            <h6 className="fw-bold">Upload Bukti Pembayaran</h6>
                          </Row>
                          <Row>
                            <h6 className="fw-normal ">
                              Untuk membantu kami lebih cepat melakukan
                              pengecekan. Kamu bisa upload bukti bayarmu
                            </h6>
                          </Row>
                          <Row>
                            <Col style={{ display: "flex" }}>
                              <div className="d-grid">
                                <ButtonUpload />
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
                <Col>
                  <PaymentCountdown />
                  <Rekening amountTransfer={orderData.total_price} />
                  <Instruction />
                </Col>
                <Col>
                  <Card style={{ width: 405 }}>
                    <Card.Body className="p-3">
                      <Row>
                        <h5 className="fw-bold">Konfirmasi Pembayaran</h5>
                      </Row>
                      <Row>
                        <h6 className="fw-normal ">
                          Terima kasih telah melakukan konfirmasi pembayaran.
                          Pembayaranmu akan segera kami cek tunggu kurang lebih
                          10 menit untuk mendapatkan konfirmasi.
                        </h6>
                      </Row>
                      <Row>
                        <h5 className="fw-bold">Upload Bukti Pembayaran</h5>
                      </Row>
                      <Row>
                        <h6 className="fw-normal ">
                          Untuk membantu kami lebih cepat melakukan pengecekan.
                          Kamu bisa upload bukti bayarmu
                        </h6>
                      </Row>
                      <Row>
                        <Col>
                          <div className="d-grid">
                            <ButtonUpload />
                          </div>
                        </Col>
                      </Row>
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
  return <RenderPayment />;
};

export default Payment;
