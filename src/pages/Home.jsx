import React from "react";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import WhyUs from "../components/WhyUs";
import CtaSewaMobil from "../components/CtaSewaMobil";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import CustomHemlet from "../components/CustomHelmet";

const Home = () => {
  return (
    <>
      <CustomHemlet />
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
