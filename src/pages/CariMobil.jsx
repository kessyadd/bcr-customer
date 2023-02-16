import React from "react";
import Hero from "../components/Hero";
import FormCariMobil from "../components/FormCariMobil";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import "../assets/css/formCariMobil.css";
// import CustomHemlet from "../components/CustomHelmet";

const CariMobil = () => {
  return (
    <>
      {/* <CustomHemlet /> */}
      <Hero isButton={false} />
      <FormCariMobil />
      <section className="m-5 p-3"></section>
      <Container id="spn" />
    </>
  );
};

export default CariMobil;
