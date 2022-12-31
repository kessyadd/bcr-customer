import React from "react";
import Hero from "../components/Hero";
import FormCariMobil from "../components/FormCariMobil";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import "../assets/css/formCariMobil.css";

const CariMobil = () => {
  useEffect(() => {
    document.title = "Binar Car Rental - Cari Mobil";
  }, []);
  return (
    <>
      <Hero isButton={false} />
      <FormCariMobil />
      <section className="m-5 p-3"></section>
      <Container id="spn" />
    </>
  );
};

export default CariMobil;
