import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AddToCartContextProvider } from "./Context/AddToCart";
import { ModalProvider } from "./Context/ShowModal";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AddToCartContextProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </AddToCartContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
