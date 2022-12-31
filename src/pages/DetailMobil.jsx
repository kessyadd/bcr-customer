import SecHero from "../components/SecHero";
import FormHasilPencarian from "../components/FormHasilPencarian";
import DeskripsiMobil from "../components/DeskripsiMobil";
import "../assets/css/formHasilPencarian.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";

const DetailMobil = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = "Binar Car Rental - Detil Mobil";
  }, []);
  return (
    <>
      <SecHero />
      <FormHasilPencarian
        isEdit={false}
        isDisabled={true}
        payloadCard={location.state.payload}
      />
      <Container id="spn" />
      <DeskripsiMobil />
    </>
  );
};

export default DetailMobil;
