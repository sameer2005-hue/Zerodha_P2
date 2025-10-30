import React from "react";
import Hero from "./Hero";
import Trust from "./Trust";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../SignUp";
import Navbar from "../Navbar";
import Footer from "../Footer";

function MainHome() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trust />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default MainHome;
