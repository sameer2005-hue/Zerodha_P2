import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h3 className="mt-3">Zerodha Products</h3>
        <p className="fs-4">Sleek, modern, and intuitive trading platforms</p>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="ri-arrow-right-line"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;