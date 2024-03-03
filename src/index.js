import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import ProductContext from "./context/ProductContext";
import CardContext from "./context/CardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContext>
      <CardContext>
        <App />
        <MainRoutes />
      </CardContext>
    </ProductContext>
  </BrowserRouter>
);
