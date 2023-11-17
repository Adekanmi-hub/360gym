import React from "react";
import { Header } from "../Components/Landing Page/Head/Header";
import { Section1 } from "../Components/Landing Page/Sections/Section1/Section1";
import Section2 from "../Components/Landing Page/Sections/Section2/Section2";
import Section3 from "../Components/Landing Page/Sections/Section3/Section3";
import Section4 from "../Components/Landing Page/Sections/Section4/Section4";
import Footer from "../Components/Landing Page/Footer/Footer";

export const LandingPage = () => {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};
