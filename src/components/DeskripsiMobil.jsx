import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import User from "../assets/img/fi_users.png";
import { useParams } from "react-router-dom";
import APICar from "../apis/customer/APICar";
import "../assets/css/deskripsiMobil.css";

const DeskripsiMobil = () => {
  const [car, setCar] = useState();
  const params = useParams();
  // const [carCategory, setCarCategory] = useState();
  // console.log(`deskripsi ${params.carId}`);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const res = await APICar.findCarById(params.carId);
      setCar(res.data);
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [params.carId]);

  return (
    <>
      {car ? (
        <Container fluid className="mt-3">
          <Container className="m-5 p-3"></Container>
          <Row
            className="d-row"
            style={{
              marginLeft: "9.2rem",
              marginRight: "9.2rem",
              paddingTop: "2em",
              paddingBottom: "3em",
            }}
          >
            <Col lg={8} md={12} sm={12}>
              <Card className="p-5 shadow-sm mb-3">
                <h6 className="mb-4 fw-bold">Tentang Paket</h6>
                <h6 className="fw-bold">Include</h6>
                <ul>
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
                <h6 className="fw-bold">Exclude</h6>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <h6 className="fw-bold">Refund, Reschedule, Overtime</h6>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </Card>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <Card className="card_right p-5 shadow-sm">
                <img src={car.image} alt="mobil" />
                <h6 className="fw-bold mt-4">{car.name}</h6>
                <p className="p_jumlah_orang mt-2">
                  <img src={User} alt="user" />
                  <span class="px-1"></span>{" "}
                  {car.category === "small" && "2 - 4 orang"}
                  {car.category === "medium" && "4 - 6 orang"}
                  {car.category === "Medium" && "4 - 6 orang"}
                  {car.category === "large" && "6 - 8 orang"}
                </p>
                <Row>
                  <Col>
                    <p>Total</p>
                  </Col>
                  <Col className="text-end">
                    <p>Rp {car.price}</p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container style={{ marginTop: "200px", textAlign: "center" }}>
          <Spinner animation="border" />
        </Container>
      )}
    </>
  );
};

export default DeskripsiMobil;
