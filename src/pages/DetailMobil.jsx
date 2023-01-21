import SecHero from "../components/SecHero";
import FormHasilPencarian from "../components/FormHasilPencarian";
import DeskripsiMobil from "../components/DeskripsiMobil";
import "../assets/css/formHasilPencarian.css";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";

const DetailMobil = () => {
  useEffect(() => {
    document.title = "Binar Car Rental - Detil Mobil";
  }, []);
  return (
    <>
      <SecHero />
      <FormHasilPencarian isEdit={false} isDisabled={true} />
      <Container id="spn" />
      <DeskripsiMobil />
    </>
  );
};

export default DetailMobil;
