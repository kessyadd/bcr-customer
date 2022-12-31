import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../assets/css/ctaSewaMobil.css";

const CtaSewaMobil = () => {
  return (
    <Container fluid class="pt-5">
      <Row className="cta m-5 rounded-3 text-center">
        <Col lg={12} className="p-5">
          <h1 className="fw-bold">Sewa Mobil di Jakarta Sekarang</h1>
          <p className="pt-2 pb-4 mx-lg-5 mx-sm-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
            vel repellendus a beatae ducimus obcaecati quo ut magnam, modi earum
            adipisci autem repellat culpa! Quae ratione libero molestias. Quis,
            sed.
          </p>
          <Button
            as={Link}
            variant="success"
            className="fw-bolder"
            to="/cari-mobil"
          >
            Mulai Sewa Mobil
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CtaSewaMobil;
