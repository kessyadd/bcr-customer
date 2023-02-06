import React from "react";
import { Form, Button, Col, Row, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../assets/css/formHasilPencarian.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filters,
  fetchStatus,
  resetCar,
  setPage,
} from "../store/features/searchCarSlice";

const FormHasilPencarian = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //set form value
  const car = useSelector((state) => state.searchCar);
  let defaultName = car.filterData[0].name;
  let optCategory = car.filterData[0].category;
  let optStatus = car.filterData[0].isRented;
  let optPriceMin = car.filterData[0].minPrice;
  let optPriceMax = car.filterData[0].maxPrice;
  const page = 1;
  const pageSize = 9;

  //edit button onClick
  const handleEditSearchCar = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const category = formData.get("category");
    let isRented = formData.get("isRented");
    const price = formData.get("price");

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
    console.log(payload);
    dispatch(setPage(page));
    dispatch(filters(payload)); //set payload
    dispatch(fetchStatus("loading")); //set fetch status
    dispatch(resetCar([])); //reset car data
    navigate("/hasil-pencarian");
  };

  return (
    <>
      <Container fluid className="hp-container">
        <Card className="shadow-sm hp-card">
          <Form onSubmit={handleEditSearchCar}>
            <Row className="align-items-end justify-content-center p-2">
              <Form.Group
                as={Col}
                className="py-1"
                lg="auto"
                sm={12}
                controlId="namaMobil"
              >
                <h5 className="fw-bold mb-4">Pencarianmu</h5>
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control
                  placeholder="Ketik nama/tipe mobil"
                  defaultValue={defaultName ? defaultName : ""}
                  type="text"
                  class="form-control"
                  disabled={props.isDisabled}
                  id="name"
                  name="name"
                />
              </Form.Group>
              <Form.Group as={Col} className="py-1" lg="auto" sm={12}>
                <Form.Label>Kategori</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  disabled={props.isDisabled}
                  id="category"
                  name="category"
                >
                  <option selected value="">
                    Masukkan Kapasitas Mobil
                  </option>
                  <option
                    selected={optCategory === "small" ? true : false}
                    value="small"
                  >
                    2-4 orang
                  </option>
                  <option
                    selected={optCategory === "medium" ? true : false}
                    value="medium"
                  >
                    4-6 orang
                  </option>
                  <option
                    selected={optCategory === "large" ? true : false}
                    value="large"
                  >
                    6-8 orang
                  </option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} className="py-1" lg="auto" sm={12}>
                <Form.Label>Harga</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  disabled={props.isDisabled}
                  id="price"
                  name="price"
                >
                  <option selected value="">
                    Harga Sewa per Hari
                  </option>
                  <option
                    selected={optPriceMax === 399999 ? true : false}
                    value="cheap"
                  >
                    &lt; Rp. 400.000
                  </option>
                  <option
                    selected={optPriceMax === 600000 ? true : false}
                    value="medium"
                  >
                    Rp. 400.000 - Rp. 600.000
                  </option>
                  <option
                    selected={optPriceMin === 600000 ? true : false}
                    value="expensive"
                  >
                    &gt;Rp. 600.000
                  </option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} className="py-1" lg="auto" sm={12}>
                <Form.Label>Status</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  disabled={props.isDisabled}
                  id="isRented"
                  name="isRented"
                >
                  <option selected value="">
                    Status
                  </option>
                  <option
                    selected={optStatus === true ? true : false}
                    value="TRUE"
                  >
                    Disewakan
                  </option>
                  <option
                    selected={optStatus === false ? true : false}
                    value="FALSE"
                  >
                    Tersedia
                  </option>
                </Form.Select>
              </Form.Group>
              {props.isEdit === true && (
                <Col className="py-1" lg="auto" sm={12}>
                  <Button type="submit" variant="outline-primary">
                    Edit
                  </Button>
                </Col>
              )}
            </Row>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default FormHasilPencarian;
