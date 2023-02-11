import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import AddUser from "./components/Users/AddUser";
import Home from "./components/Layout/Home";
import Privateroute from "./components/Core/PrivateRoute";
import Products from "./components/Products";
import UsersTable from "./components/Users/UsersTable";
export default class RoutesComp extends Component {
  render() {
    return (

      <Routes>
        <Route path="home" element={<Privateroute Component={Home} path="home" />}></Route>
        <Route path="userstable" element={<Privateroute Component={UsersTable} />}></Route>
        <Route path="adduser" element={<Privateroute Component={AddUser} />}></Route>
        <Route path="viewuser/:id" element={<Privateroute Component={AddUser} />}></Route>
        <Route path="products" element={<Privateroute Component={Products} />}></Route>
      </Routes>
    );
  }
}
