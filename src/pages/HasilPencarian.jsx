import React from "react";
import Container from "react-bootstrap/Container";
import CardCar from "../components/CardCar";
import FormHasilPencarian from "../components/FormHasilPencarian";
import SecHero from "../components/SecHero";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../assets/css/formHasilPencarian.css";

const HasilPencarian = () => {
  const location = useLocation();
  console.log(
    `halaman hasil pencarian ${JSON.stringify(
      location.state.carData
    )} payload ${JSON.stringify(location.state.payload)}`
  );
  useEffect(() => {
    document.title = "Binar Car Rental - Hasil Pencarian";
  }, []);
  return (
    <>
      <SecHero />
      <FormHasilPencarian
        isEdit={true}
        isDisabled={false}
        payloadCard={location.state.payload}
      />
      <section className="m-5 p-3"></section>
      <Container id="spn" />
      <CardCar
        carDataCard={location.state.carData}
        payloadCard={location.state.payload}
      />
    </>
  );
};

export default HasilPencarian;
