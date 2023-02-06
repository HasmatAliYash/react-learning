import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginComponent from "./components/LoginComponent";
import Privateroute from "./components/PrivateRoute";

export default class RoutesComp extends Component {
  render() {
    return (

      <Routes>
        <Route element={<LoginComponent />} path="/"></Route>
        <Route element={<LoginComponent />} exact path="/login"></Route>
        <Route path="dashboard" element={<Privateroute Component={Dashboard} />}></Route>
        <Route path="dashboard" element={<Privateroute Component={Dashboard} />}></Route>
        <Route path="dashboard" element={<Privateroute Component={Dashboard} />}></Route>
      </Routes>
    );
  }
}
