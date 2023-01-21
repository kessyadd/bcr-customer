import React from "react";
import Container from "react-bootstrap/Container";
import CardCar from "../components/CardCar";
import FormHasilPencarian from "../components/FormHasilPencarian";
import SecHero from "../components/SecHero";
import { useEffect } from "react";
import "../assets/css/formHasilPencarian.css";

const HasilPencarian = () => {
  useEffect(() => {
    document.title = "Binar Car Rental - Hasil Pencarian";
  }, []);
  return (
    <>
      <SecHero />
      <FormHasilPencarian isEdit={true} isDisabled={false} />
      <section className="m-5 p-3"></section>
      <Container id="spn" />
      <CardCar />
    </>
  );
};

export default HasilPencarian;
