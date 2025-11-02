import React from "react";
import education from "../../assets/education.svg";

function Education() {
  return (
    <div className="container mb-5">
      <div className="row mt-5">
        <div className="col-6 text-center">
          <img src={education} alt="" />
        </div>
        <div className="col-6 mt-5">
          <h3>Free and open market education</h3>
          <div className="text mt-4">
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href="">Varsity &#8594;</a>
          </div>
          <div className="text mt-4">
            <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href="">TradingQ&A &#8594;</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
