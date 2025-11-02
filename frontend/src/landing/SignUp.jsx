import React from "react";
import "../../public/css/signUp.css"
import { Link } from "react-router-dom";

function SignUpMain() {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="text-center mt-5">
        <h3 className="mt-5">Open a Zerodha account</h3>
        <p className="signupText mt-4">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <Link to="/signup">
          <button className="btns btn btn-primary mt-3 p-2 fs-5 mb-5">Sign up for free</button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default SignUpMain;
