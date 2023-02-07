import React from "react";
import { Form, Button, Col, Row, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../assets/css/formCariMobil.css";
import { useDispatch } from "react-redux";
import {
  resetCar,
  filters,
  setPage,
  fetchStatus,
} from "../store/features/searchCarSlice";

const FormCariMobil = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchCar = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const category = formData.get("category");
    let isRented = formData.get("isRented");
    const price = formData.get("price");
    const page = 1;
    const pageSize = 9;

    let minPrice = 0;
    let maxPrice = 0;
    if (price === "cheap") {
      minPrice = 0;
      maxPrice = 399999;
    }

    if (price === "medium") {
      minPrice = 400000;
      maxPrice = 600000;
    }

    if (price === "expensive") {
      minPrice = 600000;
      maxPrice = 10000000;
    }
    if (price === "") {
      minPrice = "";
      maxPrice = "";
    }
    if (isRented !== "") {
      if (isRented === "TRUE") isRented = true;
      if (isRented === "FALSE") isRented = false;
    }

    const payload = {
      name,
      category,
      isRented,
      minPrice,
      maxPrice,
      page,
      pageSize,
    };
    dispatch(setPage(page));
    dispatch(filters(payload)); //set payload
    dispatch(fetchStatus("loading")); //set fetch status
    dispatch(resetCar([])); //reset car data
    navigate("/hasil-pencarian");
  };

  const on = () => {
    document.getElementById("overlay").style.display = "block";
  };

  const off = () => {
    document.getElementById("overlay").style.display = "none";
  };
  return (
    <>
      <div id="overlay" onClick={off}></div>
      <Container fluid className="form-cari">
        <Card className="shadow-sm f-card">
          <Form onSubmit={handleSearchCar}>
            <Row className="align-items-end justify-content-center p-2">
              <Form.Group as={Col} className="py-1" lg="auto" md={12} sm={12}>
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control
                  placeholder="Ketik nama/tipe mobil"
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  onClick={on}
                />
              </Form.Group>
              <Form.Group as={Col} className="py-1" lg="auto" md={12} sm={12}>
                <Form.Label>Kategori</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="category"
                  id="category"
                  onClick={on}
                >
                  <option selected value="">
                    Masukkan Kapasitas Mobil
                  </option>
                  <option value="small">2 - 4 orang</option>
                  <option value="medium">4 - 6 orang</option>
                  <option value="large">6 - 8 orang</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                as={Col}
                className="py-1"
                lg="auto"
                md={12}
                sm={12}
                controlId="kategori"
              >
                <Form.Label>Harga</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="price"
                  id="price"
                  onClick={on}
                >
                  <option selected value="">
                    Harga Sewa per Hari
                  </option>
                  <option value="cheap">&lt; Rp. 400.000</option>
                  <option value="medium">Rp. 400.000 - Rp. 600.000</option>
                  <option value="expensive">&gt;Rp. 600.000</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                as={Col}
                className="py-1"
                lg="auto"
                md={12}
                sm={12}
                controlId="status"
              >
                <Form.Label>Status</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="isRented"
                  id="isRented"
                  onClick={on}
                >
                  <option selected value="">
                    Status
                  </option>
                  <option value="TRUE">Disewakan</option>
                  <option value="FALSE">Tersedia</option>
                </Form.Select>
              </Form.Group>
              <Col className="py-1" lg="auto" md={12} sm={12}>
                <Button type="submit" variant="success">
                  Cari Mobil
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default FormCariMobil;
