import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import img_car from "../assets/img/img_car.png";
import Col from "react-bootstrap/Col";
import ButtonCariMobil from "./ButtonCariMobil";
import "../assets/css/hero.css";

const Hero = (props) => {
  return (
    <Container fluid id="hero" className="pt-4">
      <Row className="align-items-center">
        <Col lg={6} className="p-5">
          <h1 className="pb-3 fw-bold">
            Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)
          </h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          {props.isButton === true && <ButtonCariMobil />}
        </Col>
        <Col lg={6} className="p-0 m-0 text-end">
          <img src={img_car} className="img-fluid" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
