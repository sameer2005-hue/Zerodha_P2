import React from "react";
import pressLogos from "../../assets/pressLogos.png";
import ecosystem from "../../assets/ecosystem.png";
import "../../../public/css/Home/Trust.css";

function Trust() {
  return (
    <div className="container">
      <div className="row m-5  ">
        <div className="col-5">
          <h3 className="mb-5">Trust with confidence</h3>
          <div className="text">
            <h4>Customer-first always</h4>
            <p className="me-5 mt-2 mb-5">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div className="text">
            <h4>No spam or gimmicks</h4>
            <p className="me-5 mt-2 mb-5">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
              <a href="">Our philosophies.</a>
            </p>
          </div>
          <div className="text">
            <h4>The Zerodha universe</h4>
            <p className="me-5 mt-2 mb-5">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="text">
            <h4>Do better with money</h4>
            <p className="me-5 mt-2 mb-5">
              With initiatives like <a href="">Nudge</a> and
              <a href=""> Kill Switch</a>, we don't just facilitate
              transactions, but actively help you do better with your money.
            </p>
          </div>
        </div>

        <div className="col-7 text-center">
          <img
            className="mb-4"
            src={ecosystem}
            alt=""
            style={{ width: "90%" }}
          />
          <div className="trustLink mt-5 mb-5 ">
            <a className="me-4" href="">
              Explore our products &#8594;
            </a>
            <a className="" href="">
              Try Kite demo &#8594;
            </a>
          </div>
        </div>
        <div className="trsutImage mt-5 mb-5">
          <img
            src={pressLogos}
            alt=""
            style={{ width: "70%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Trust;
