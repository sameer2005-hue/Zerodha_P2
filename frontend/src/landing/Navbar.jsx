import React from "react";
import logo from "../assets/logo.svg";
import "../../public/css/signUp.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div class="container-fluid ">
        <Link class="navbar-brand" to="/">
          <img src={logo} alt="" style={{ width: "22%" }} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav p-1">
            <li class="nav-item pe-4">
              <Link class="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item pe-4">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item pe-4">
              <Link class="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item pe-4">
              <Link class="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item pe-4">
              <Link class="nav-link" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
