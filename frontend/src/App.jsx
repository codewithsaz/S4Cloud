import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Layout from "./Routes/Layout/Layout";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Layout />
      </Router>
    </>
  );
}

export default App;
