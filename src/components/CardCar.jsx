import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import "../assets/css/cardCar.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CardCar = () => {
  const car = useSelector((state) => state.searchCar);
  const data = car.data;
  const navigate = useNavigate();
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const toDetilMobil = (id) => (e) => {
    e.preventDefault();
    navigate(`/detil-mobil/${id}`);
  };

  return (
    <Container className="card-list">
      <Row id="card-car">
        {data.cars.map((car) => (
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src={car.image}
                alt={car.name}
                className="mb-3"
                style={{ height: "14rem" }}
              />
              <Card.Body>
                <h6>{car.name}</h6>
                <Card.Title className="fw-bold my-3">
                  {formatter.format(car.price)}/hari
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Button
                  variant="success"
                  type="submit"
                  className="btn-card"
                  onClick={toDetilMobil(car.id)}
                >
                  Pilih Mobil
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardCar;
