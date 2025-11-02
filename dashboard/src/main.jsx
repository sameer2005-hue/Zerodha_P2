import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import Home from "./components/Home";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        {/* this "/*"  '*' => ye star hmne islye lagaya taki hm jo bhi change kre vo componet me hii rhe pure app ko reload na kre */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);