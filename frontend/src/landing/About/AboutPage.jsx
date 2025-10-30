import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import AboutText from "./aboutText";
import MainProple from "./MainProple";
import Peoples from "./Peoples";
import Footer from "../Footer";

function About() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutText />
      <MainProple />
      <Peoples />
      <Footer />
    </>
  );
}

export default About;
