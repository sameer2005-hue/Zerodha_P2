import React, { useState } from "react";
import homeHero from "../../assets/homeHero.png";
import "../../../public/css/Home/Hero.css";
import { Link } from "react-router-dom";
import HeroSignup from "../Signup/Hero";
function Hero() {
  const [showForm, setShowForm] = useState(null);

  return (
    <div className="container p-5">
      <div className="hero row mb-5">
        <img src={homeHero} alt="HomeHero Image" className="heroImage mb-4" />
        <h2 className="mt-5">Invest in everything</h2>
        <p className="paraText fs-4">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <div>
          <Link to="/signup" state={{formType: "signup"}}>
            <button
              className="btns btn btn-primary mt-3 me-2 p-2 fs-5 mb-5"
              onClick={() => setShowForm("signup")}
            >
              Sign up for free
            </button>
          </Link>
          <Link to="/signup" state={{formType: "login"}}>
            <button
              className="btns btn btn-outline-primary mt-3 p-2 fs-5 mb-5"
              onClick={() => setShowForm("login")}
            >
              Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
