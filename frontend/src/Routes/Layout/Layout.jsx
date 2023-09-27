import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import ErrorPage from "../../Pages/Error/ErrorPage";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default Layout;
