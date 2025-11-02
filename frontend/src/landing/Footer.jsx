import React from "react";
import logo from "../assets/logo.svg";
import "../../public/css/signUp.css";


function Footer() {
  return (
    <div className="footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col m-5">
            <img src={logo} alt="logo" style={{ width: "50%" }} />
            <p className="mt-4">&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
            <div className="logo mt-4">
              <i class="ri-twitter-fill me-4 fs-4 "></i>
              <i class="ri-facebook-fill me-4 fs-4 "></i>
              <i class="ri-instagram-fill me-4 fs-4 "></i>
              <i class="ri-linkedin-fill me-4 fs-4 "></i>
            </div>
            <hr />
            <div>
              <i class="ri-youtube-fill me-4 fs-4 "></i>
              <i class="ri-whatsapp-fill me-4 fs-4 "></i>
              <i class="ri-telegram-2-fill me-4 fs-4 "></i>
            </div>
          </div>
          <div className="col mt-5">
            <h5>Account</h5>
            <ul className="allLink mt-4">
              <li>Open demat account</li>
              <li>Minor demat account</li>
              <li>NRI demat account</li>
              <li>Commodity</li>
              <li>Dematerialisation</li>
              <li>Fund transfer</li>
              <li>MTF</li>
              <li>Referral program</li>
            </ul>
          </div>
          <div className="col mt-5">
            <h5>Support</h5>
            <ul className="mt-4">
              <li>Contact us</li>
              <li>Support portal</li>
              <li>How to file a complaint?</li>
              <li>Status of your complaints</li>
              <li>Bulletin</li>
              <li>Circular</li>
              <li>Z-Connect blog</li>
              <li>Downloads</li>
            </ul>
          </div>
          <div className="col mt-5">
            <h5>Company</h5>
            <ul className="mt-4">
              <li>About</li>
              <li>Philosophy</li>
              <li>Press & media</li>
              <li>Careers</li>
              <li>Zerodha Cares (CSR)</li>
              <li>Zerodha.tech</li>
              <li>Open source</li>
            </ul>
          </div>
          <div className="col mt-5">
            <h5>Quick Links</h5>
            <ul className="mt-4">
              <li>Upcoming IPOs</li>
              <li>Brokerage charges</li>
              <li>Market holidays</li>
              <li>Economic calendar</li>
              <li>Calculators</li>
              <li>Markets</li>
              <li>Sectors</li>
            </ul>
          </div>
        </div>
        <p className="para ms-5 me-5 mt-5 <br/>">
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
          Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
          Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
          Karnataka, India. For any complaints pertaining to securities broking
          please write to complaints@zerodha.com, for DP related to
          dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
          Document as prescribed by SEBI | ICF. <br /> <br /> Procedure to file
          a complaint on SEBI SCORES: Register on SCORES portal. Mandatory
          details for filing complaints on SCORES: Name, PAN, Address, Mobile
          Number, E-mail ID. Benefits: Effective Communication, Speedy redressal
          of the grievances <br /> <br />
          Smart Online Dispute Resolution | Grievances Redressal Mechanism{" "}
          <br /> <br />
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing. <br /> <br />{" "}
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month. <br /> <br /> India's
          largest broker based on networth as per NSE. NSE broker factsheet{" "}
          <br /> <br /> "Prevent unauthorised transactions in your account.
          Update your mobile numbers/email IDs with your stock brokers. Receive
          information of your transactions directly from Exchange on your
          mobile/email at the end of the day. Issued in the interest of
          investors. KYC is one time exercise while dealing in securities
          markets - once KYC is done through a SEBI registered intermediary
          (broker, DP, Mutual Fund etc.), you need not undergo the same process
          again when you approach another intermediary." Dear Investor, if you
          are subscribing to an IPO, there is no need to issue a cheque. Please
          write the Bank account number and sign the IPO application form to
          authorize your bank to make payment in case of allotment. In case of
          non allotment the funds will remain in your bank account. As a
          business we don't give stock tips, and have not authorized anyone to
          trade on behalf of others. If you find anyone claiming to be part of
          Zerodha and offering such services, please create a ticket here.
        </p>
        <div className="flexLink d-flex m-5">
          <p className="me-5">NSE</p>
          <p className="me-5">BSE</p>
          <p className="me-5">MCX</p>
          <p className="me-5">Terms & Conditions</p>
          <p className="me-5">Policies & Procedure</p>
          <p className="me-5">Privacy Policy</p>
          <p className="me-5">Disclouser</p>
          <p className="me-5">For inverstor's attention</p>
          <p className="me-5">Investor charactor</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
