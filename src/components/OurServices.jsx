import React from "react";
import img_service from "../assets/img/img_service.png";
import blue_check from "../assets/img/blue_check.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/ourServices.css";

const OurServices = () => {
  return (
    <Container fluid id="ourServices" className="pt-5">
      <Row className="align-items-center m-lg-5 m-sm-0">
        <Col lg={6} className="p-5">
          <img
            src={img_service}
            className="img-fluid lign-items-center justify-content-center"
            alt="our services"
          />
        </Col>
        <Col lg={6} className="p-5">
          <h2 className="pb-2 fw-bold">
            Best Car Rental for any kind of trip in Jakarta!
          </h2>
          <p>
            Sewa mobil di Jakarta bersama Binar Car Rental jaminan harga lebih
            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
            dll.
          </p>
          <ul className="p-0 list-unstyled fw-bold">
            <li className="color-black">
              <img src={blue_check} alt="" />
              <span className="px-2"></span>Sewa Mobil Dengan Supir di Bali 12
              Jam
            </li>
            <li className="color-black">
              <img src={blue_check} alt="" />
              <span className="px-2"></span>Sewa Mobil Lepas Kunci di Bali 24
              Jam
            </li>
            <li className="color-black">
              <img src={blue_check} alt="" />
              <span className="px-2"></span>Gratis Antar - Jemput Mobil di
              Bandara
            </li>
            <li className="color-black">
              <img src={blue_check} alt="" />
              <span className="px-2"></span>Layanan Airport Transfer / Drop In
              Out
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default OurServices;
