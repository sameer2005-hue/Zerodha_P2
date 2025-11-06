import React, { useState } from "react";
import axios from "axios";
import img from "../../assets/signup.png";

function Hero({formType, onBack}) {
  const [showForm, setShowForm] = useState(null);
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
        const res = await axios.post("http://localhost:3000/signup", formData);
        console.log("Submitting form data:", formData);
        if (res.status === 201) {
          // console.log("Signup successful", res.data);
          // const { user } = res.data;
          // if (user && user.username) {
          //   localStorage.setItem("username", user.username);
          // }
          window.location.href = "http://localhost:5174/"; // or your dashboard URL
        }
      } else if (formType === "login") {
        const res = await axios.post("http://localhost:3000/login", {
          username: formData.username,
          password: formData.password,
        });
        if (res.status === 200) {
          localStorage.setItem("username", res.data.username);
          alert("Login successful!");
          window.location.href = "http://localhost:5174/";
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container ">
      <div className="hero-content mt-5 mb-5 text-center">
        <h2 className="mt-5">Open a free demat and trading account online</h2>
        <p className="mt-3 fs-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      <div className="row ms-5 mb-5">
        <div className="col-6 mt-5 ps-5 text-center">
          <img src={img} alt="" style={{ width: "90%" }} />
        </div>
        <div className="col-6 mt-5 ps-5">
          <h3>SignUp now</h3>
          <div className="mt-4">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="username" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
