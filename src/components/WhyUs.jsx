import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import IconComplete from "../assets/img/icon_complete.png";
import IconPrice from "../assets/img/icon_price.png";
import IconHrs from "../assets/img/icon_24hrs.png";
import IconPro from "../assets/img/icon_professional.png";
import "../assets/css/whyUs.css";

const WhyUs = () => {
  return (
    <Container fluid id="whyUs" className="pt-5">
      <Row className="align-items-center m-5">
        <Col lg={12}>
          <h1 className="fw-bold">Why Us?</h1>
          <h5 className="fw-bold">Mengapa harus pilih Binar Car Rental?</h5>
        </Col>
      </Row>
      <Row className="m-5">
        <Col lg={3} md={3} sm={12} className="mb-3">
          <Card className="py-3">
            <Card.Body>
              <img src={IconComplete} alt="complete" width="32px" />
              <Card.Title className="my-3 fw-bold">Mobil Lengkap</Card.Title>
              <Card.Text>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={3} sm={12} className="mb-3">
          <Card className="py-3">
            <Card.Body>
              <img src={IconPrice} alt="price" width="32px" />
              <Card.Title className="my-3 fw-bold">Harga Murah</Card.Title>
              <Card.Text>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={3} sm={12} className="mb-3">
          <Card className="py-3">
            <Card.Body>
              <img src={IconHrs} alt="24 hrs" width="32px" />
              <Card.Title className="my-3 fw-bold">Layanan 24 Jam</Card.Title>
              <Card.Text>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={3} sm={12} className="mb-3">
          <Card className="py-3">
            <Card.Body>
              <img src={IconPro} alt="pro" width="32px" />
              <Card.Title className="my-3 fw-bold">
                Sopir Profesional
              </Card.Title>
              <Card.Text>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUs;
