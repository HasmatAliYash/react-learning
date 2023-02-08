import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginComponent from "./components/LoginComponent";
import Privateroute from "./components/PrivateRoute";

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
