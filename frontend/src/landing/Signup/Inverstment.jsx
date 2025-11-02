import React from "react";
import "../../../public/css/signUp.css";

function Inverstment() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">
        Investment options with Zerodha demat account
      </h2>
      <div className="container mt-4">
        <div className="row ms-5 mb-5">
          <div className="col d-flex">
            <div>
              <img
                src="https://zerodha.com/static/images/stocks-acop.svg"
                alt=""
              />
            </div>
            <div>
              <h3>Stocks</h3>
              <p>Invest in all exchange-listed securities</p>
            </div>
          </div>
          <div className="col d-flex">
            <div>
              <img src="https://zerodha.com/static/images/mf-acop.svg" alt="" />
            </div>
            <div>
              <h3>Mutual funds</h3>
              <p>Invest in commission-free direct mutual funds</p>
            </div>
          </div>
        </div>
        <div className="row ms-5 mt-5">
          <div className="col d-flex">
            <div>
              <img
                src="https://zerodha.com/static/images/ipo-acop.svg"
                alt=""
              />
            </div>
            <div>
              <h3>IPO</h3>
              <p>Apply to the latest IPOs instantly via UPI</p>
            </div>
          </div>
          <div className="col d-flex">
            <div>
              <img src="https://zerodha.com/static/images/fo-acop.svg" alt="" />
            </div>
            <div>
              <h3>Futures & options</h3>
              <p>
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <button className="explore mt-5 btn btn-primary">
          Explore Investments
        </button>
      </div>
    </div>
  );
}

export default Inverstment;
