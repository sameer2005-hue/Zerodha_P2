import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Orders() {
  const [allOrders, setAllOrders] = useState([]);
  const location = useLocation();

  // Fetch orders on page load
  useEffect(() => {
    axios
      .get("http://localhost:3000/allorders", { withCredentials: true })
      .then((res) => setAllOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  // If a new order is passed via navigation, append it
  useEffect(() => {
    if (location.state?.newOrder) {
      setAllOrders((prev) => [...prev, location.state.newOrder]);
    }
  }, [location.state]);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total Price</th>
            </tr>
          </thead>

          <tbody>
            {allOrders.map((stock, index) => {
              const totalPrice = stock.price * stock.qty;
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>
                    <b>{totalPrice.toFixed(2)}</b>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orders;
