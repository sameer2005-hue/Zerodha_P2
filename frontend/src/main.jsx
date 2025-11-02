import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHome from "./landing/Home/MainHome.jsx";
import AboutPage from "./landing/About/AboutPage.jsx";
import PricingPage from "./landing/Pricing/PricingPage.jsx";
import ProductPage from "./landing/Products/ProductPage.jsx";
import SupportPage from "./landing/Support/SupportPage.jsx";
import SignUp from "./landing/Signup/SignupPage.jsx";
import Navbar from "./landing/Navbar";
import Footer from "./landing/Footer";
import NotFound from "./landing/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<MainHome />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/pricing" element={<PricingPage />}/>
      <Route path="/products" element={<ProductPage />}/>
      <Route path="/support" element={<SupportPage />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
