import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const navigate = useNavigate();
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/neworder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        },
        { withCredentials: true }
      );

      if (res.data.success) {
        // ✅ navigate to Orders page and send new order data
        navigate("/orders", { state: { newOrder: res.data.newOrder } });
      }

      closeBuyWindow();
    } catch (err) {
      console.error("Error placing order:", err);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <h3>Buying {uid}</h3>
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <label htmlFor="qty">Qty.</label>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="price">Price.</label>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
