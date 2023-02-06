import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  searchCar,
  fetchStatus,
  setPageCount,
} from "../store/features/searchCarSlice";
import APICar from "../apis/customer/APICar";
import CardCar from "../components/CardCar";
import FormHasilPencarian from "../components/FormHasilPencarian";
import SecHero from "../components/SecHero";
import "../assets/css/formHasilPencarian.css";
import CarPagination from "../components/CarPagination";

const HasilPencarian = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.searchCar);
  const filters = state.filterData[0];
  const carData = state.carData;
  const fetchStat = state.fetchStat;
  const pageCount = state.pageCount;
  const page = state.page;

  const CardCarRender = () => {
    if (fetchStat === "done") {
      return (
        <>
          <CardCar />
          <CarPagination />
        </>
      );
    }
    if (fetchStat === "loading") {
      return (
        <Container style={{ marginTop: "200px", textAlign: "center" }}>
          <Spinner animation="border" />
        </Container>
      );
    }
    if (fetchStat === "notFound") return alert("Car not found!");
  };

  useEffect(() => {
    document.title = "Binar Car Rental - Hasil Pencarian";
    if (carData.length < 1) {
      const fetchCarData = async (filters) => {
        const result = await APICar.getCarList(filters);
        dispatch(searchCar(result.data.cars));
        console.log("masuk fetch");
        dispatch(setPageCount(result.data.pageCount));
      };
      console.log(filters);
      fetchCarData(filters).catch(console.error);
    }

    //set fetch status that will be used for card rendering
    if (carData.length >= 1) {
      if (carData[0].length === 0) dispatch(fetchStatus("notFound"));
      else dispatch(fetchStatus("done"));
    }
    console.log(fetchStat);
    console.log(pageCount);
    console.log(page);
  }, [dispatch, filters, carData, fetchStat, pageCount, page]);
  return (
    <>
      <SecHero />
      {filters ? (
        <FormHasilPencarian isEdit={true} isDisabled={false} />
      ) : (
        <></>
      )}
      <section className="m-5 p-3"></section>
      <Container id="spn" />
      <CardCarRender />
    </>
  );
};

export default HasilPencarian;
