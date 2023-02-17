import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Checklist from "../assets/img/success.png";
import InvoicePDF from "../assets/img/Rectangle38.png";
import CustomHemlet from "../components/CustomHelmet";

const Tiket = () => {
  return (
    <>
      <CustomHemlet />
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-center mt-5">
              <img style={{ width: 50, height: 50 }} src={Checklist} />
            </div>
            <h5 className="text-center fw-bold mt-4">Pembayaran Berhasil!</h5>
            <h5 className="text-center text-muted fw-normal mt-3">Tunjukkan invoice ini ke petugas BCR di titik temu.</h5>
          </Col>
          <Row>
            <Col className="d-flex justify-content-center mt-5">
              <Card style={{ width: 605, height: 290 }}>
                <Card.Body>
                  <Row>
                    <Col>
                      <h6 className="text-start fw-bold ms-2 mt-2">Invoice</h6>
                    </Col>
                    <Col className="text-end d-grid">
                      <Button variant="outline-primary">
                        <a href="#" style={{ color: "blue", textDecoration: "none" }}>
                          Unduh
                        </a>
                      </Button>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-center mt-5">
                    <img src={InvoicePDF} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Tiket;
