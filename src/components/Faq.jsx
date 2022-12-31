import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "../assets/css/faq.css";

const Faq = () => {
  return (
    <Container fluid id="faq" className="pt-5">
      <Row className="m-5">
        <Col lg={6}>
          <h2 className="fw-bold">Frequently Asked Question</h2>
          <p>Kamu bisa menemukan jawaban dari pertanyaan mu disini.</p>
        </Col>
        <Col lg={6}>
          <Accordion className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Apa saja syarat yang dibutuhkan?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos voluptatem debitis ratione ut alias maiores eligendi
                possimus libero ex nulla. Commodi doloremque impedit natus
                quaerat fugit culpa qui iste vitae.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="font-b">
                Berapa hari minimal sewa mobil lepas kunci?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos voluptatem debitis ratione ut alias maiores eligendi
                possimus libero ex nulla. Commodi doloremque impedit natus
                quaerat fugit culpa qui iste vitae.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Berapa hari sebelumnya sebaiknya booking sewa mobil?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos voluptatem debitis ratione ut alias maiores eligendi
                possimus libero ex nulla. Commodi doloremque impedit natus
                quaerat fugit culpa qui iste vitae.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Apakah ada biaya antar-jemput?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos voluptatem debitis ratione ut alias maiores eligendi
                possimus libero ex nulla. Commodi doloremque impedit natus
                quaerat fugit culpa qui iste vitae.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Bagaimana jika terjadi kecelakaan?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos voluptatem debitis ratione ut alias maiores eligendi
                possimus libero ex nulla. Commodi doloremque impedit natus
                quaerat fugit culpa qui iste vitae.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
