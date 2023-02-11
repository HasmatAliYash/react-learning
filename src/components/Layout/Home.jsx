import React from "react";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import RoutesComp from "../../Routes";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div className="container-fluid">
      {/* head */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="app-logo">Yms</h2>
        <div className="navitems d-flex justify-content-between align-items-center">
          <div className="header-item">
            <FaSearch color="#d1d1d1" />
          </div>
          <div className="header-item">{<FaBell color="#d1d1d1" />}</div>
          <div className="header-item">
            <FaUser color="#d1d1d1" />
          </div>
        </div>
      </div>
      {/* content */}
      <div className="row main-content">
        <div className="sidenav">
          <Sidebar />
        </div>
        <div className="content-area">
          <RoutesComp />
        </div>
      </div>
    </div>
  );
}
