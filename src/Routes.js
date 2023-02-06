import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginComponent from "./components/LoginComponent";
import Privateroute from "./components/PrivateRoute";

export default class RoutesComp extends Component {
  render() {
    return (
      <Routes>
        <Route element={<LoginComponent />} exact path="/login"></Route>
        <Route element={<Privateroute />} exact path="/dashboard">
          <Route element={<Dashboard />} exact path=""></Route>
        </Route>
      </Routes>
    );
  }
}
