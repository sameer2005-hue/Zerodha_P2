import React from "react";
import img from "../../assets/signup.png";

function Hero() {
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
          <h3>Signup now</h3>
          <p className="mt-3 fs-5">Or track your existing application</p>
          <div>
            <div className="phone-input">
              <img src="https://flagcdn.com/w20/in.png" alt="India Flag" />
              <span className="country-code">+91</span>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your mobile number"
              />{" "}
              <br />
            </div>
            <button
              style={{ width: "50%" }}
              className="text-center btns mt-4 ps-4 pt-3 pb-3 pe-4 btn btn-primary"
            >
              Get OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
