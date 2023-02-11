import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Layout/Home";
import LoginComponent from "./components/Core/LoginComponent";
import Privateroute from "./components/Core/PrivateRoute";

export default class PrivateRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route element={<LoginComponent />} path="/"></Route>
        <Route element={<LoginComponent />} exact path="/login"></Route>
        <Route path="home/*" element={<Privateroute Component={Home} />}></Route>
      </Routes>
    );
  }
}
