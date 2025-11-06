import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function Orders() {
  let [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/allorders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Orders({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>

          {allOrders.map((stock, index) => {
            const totalPrice = stock.price * stock.qty;
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td><b>{totalPrice.toFixed(2)}</b></td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Orders;
