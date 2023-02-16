import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchCars } from "../store/features/searchCarSlice";
import CardCar from "../components/CardCar";
import FormHasilPencarian from "../components/FormHasilPencarian";
import SecHero from "../components/SecHero";
import "../assets/css/formHasilPencarian.css";
import CarPagination from "../components/CarPagination";
import { FcHighPriority } from "react-icons/fc";
// import CustomHemlet from "../components/CustomHelmet";

const HasilPencarian = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.searchCar);
  const filters = state.filterData[0];
  const status = state.status;
  const data = state.data;

  const CardCarRender = () => {
    if (data) {
      if (status === "succeeded" && data.cars.length > 0) {
        return (
          <>
            <CardCar />
            <CarPagination />
          </>
        );
      }
      if (status === "loading") {
        return (
          <Container style={{ marginTop: "200px", textAlign: "center" }}>
            <Spinner animation="border" />
          </Container>
        );
      }
      if (status === "failed" || data.cars.length === 0)
        return (
          <>
            <Container
              style={{
                margin: "10em",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p style={{ fontWeight: "normal" }}>
                <FcHighPriority style={{ marginRight: "10px" }} />
                Mobil tidak ditemukan! Mohon coba filter atau halaman lain.
              </p>
            </Container>
            <CarPagination />
          </>
        );
    }
  };

  useEffect(() => {
    dispatch(fetchSearchCars(filters));
  }, [dispatch, filters]);
  return (
    <>
      {/* <CustomHemlet /> */}
      <SecHero />
      {filters ? <FormHasilPencarian isEdit={true} isDisabled={false} /> : <></>}
      <section className="m-5 p-3"></section>
      <Container id="spn" />
      <CardCarRender />
    </>
  );
};

export default HasilPencarian;
