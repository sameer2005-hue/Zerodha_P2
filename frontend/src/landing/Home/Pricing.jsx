import React from "react";
import zero from "../../assets/pricing0.svg";
import intradayTrades from "../../assets/intradayTrades.svg";

function Pricing() {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-6">
          <div className="text textPricing mt-5 ms-5">
            <h3>Unbeatable pricing</h3>
            <p className="me-5 mt-2 mb-3">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="">See pricing &#8594;</a>
          </div>
        </div>

        <div className="col-6 d-flex">
          <div className="pricingClass d-flex align-items-center">
            <img src={zero} alt="" style={{ width: "50%" }} />
            <p className="mt-5">Free account opening</p>
          </div>
          <div className="pricingClass d-flex align-items-center">
            <img src={zero} alt="" style={{ width: "50%" }} />
            <p className="mt-5">Free equity delivery and direct mutual funds</p>
          </div>
          <div className="pricingClass d-flex align-items-center">
            <img src={intradayTrades} alt="" style={{ width: "50%" }} />
            <p className="mt-5"> Intraday and F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
