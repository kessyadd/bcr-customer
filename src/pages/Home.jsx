import React from "react";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import WhyUs from "../components/WhyUs";
import CtaSewaMobil from "../components/CtaSewaMobil";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Binar Car Rental - Home";
  }, []);
  return (
    <>
      <Hero isButton={true} />
      <OurServices />
      <WhyUs />
      <Testimonials />
      <CtaSewaMobil />
      <Faq />
    </>
  );
};

export default Home;
