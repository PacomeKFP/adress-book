import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import AppRouter from "./core/router/AppRouter.jsx";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div id="app">
        <AppRouter />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  </React.StrictMode>
);
