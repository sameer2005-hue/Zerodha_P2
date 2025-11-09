import React, { useState } from "react";
import axios from "axios";
import img from "../../assets/signup.png";
import { useLocation } from "react-router-dom";

function Hero() {
  const location = useLocation();
  const formType = location.state?.formType || "signup";

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formType === "signup") {
        const res = await axios.post("http://localhost:3000/signup", formData, {
          withCredentials: true,
        });

        if (res.data.success) {
          alert("Signup successful!");
          window.location.href = "http://localhost:5174/";
        } else {
          alert(res.data.message || "Signup failed");
        }
      } else if (formType === "login") {
        const res = await axios.post(
          "http://localhost:3000/login",
          {
            username: formData.username,
            password: formData.password,
          },
          { withCredentials: true }
        );

        if (res.data.success) {
          localStorage.setItem("username", res.data.user.username);
          alert("Login successful!");
          window.location.href = "http://localhost:5174/";
        } else {
          alert(res.data.message || "Incorrect username or password");
        }
      }
    } catch (err) {
      console.error("Error:", err);
      alert(err.response?.data?.message || "Server error occurred");
    }
  };

  return (
    <div className="container">
      <div className="hero-content text-center mt-5 mb-5">
        <h2>
          {formType === "signup"
            ? "Open a free demat and trading account"
            : "Welcome back! Log in to your account"}
        </h2>
        <p className="fs-5">
          {formType === "signup"
            ? "Start investing brokerage free and join a community of 1.6+ crore investors."
            : "Access your trading dashboard and manage your investments easily."}
        </p>
      </div>

      <div className="row ms-5 mb-5">
        <div className="col-6 text-center mt-5">
          <img src={img} alt="" style={{ width: "90%" }} />
        </div>
        <div className="col-6 mt-5 ps-5">
          <h3>{formType === "signup" ? "Sign Up" : "Log In"}</h3>
          <form onSubmit={handleSubmit}>
            {formType === "signup" && (
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {formType === "signup" ? "Sign Up" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
