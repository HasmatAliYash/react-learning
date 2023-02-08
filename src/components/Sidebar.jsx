import React from "react";
import {
  FaMicrosoft,
  FaSlidersH,
  FaRegFileAlt,
  FaChartPie,
  FaUserFriends,
  FaRegCalendarAlt,
  FaFacebookMessenger,
  FaCcMastercard,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <img className="user-profile" src="../user.png" alt="" />
      <span className="user-name"> George</span>
      <hr style={{ heiborderght: "2px solid #c1c1c1" }} />
      <ul>
        <li className="sidebarNavItems">
          <FaMicrosoft
            color="#d1d1d1"
            size="25"
            style={{ marginRight: "10px" }}
          />
          Dashboard
        </li>
        <NavLink
          to="products"
          className={({ isActive }) =>
            isActive ? "sidebarNavItems is-active" : "inactive"
          }
        >
          <li className="sidebarNavItems">
            <FaSlidersH
              color="#d1d1d1"
              size="25"
              style={{ marginRight: "10px" }}
            />
            Products
          </li>
        </NavLink>

        <li className="sidebarNavItems">
          <FaRegFileAlt
            color="#d1d1d1"
            size="25"
            style={{ marginRight: "10px" }}
          />
          File Manager
        </li>
        <li className="sidebarNavItems">
          <FaChartPie
            color="#d1d1d1"
            size="25"
            style={{ marginRight: "10px" }}
          />
          Trafic Analyzer
        </li>
        <li
          style={{ display: "block", padding: "6px" }}
          className="sidebarNavItems"
        >
          <FaUserFriends
            color="#d1d1d1"
            size="25"
            style={{ marginRight: "10px" }}
          />{" "}
          Users Manager
        </li>

        <ul style={{ padding: "20px" }}>
          <NavLink
            to="userstable"
            className={({ isActive }) =>
              isActive ? "sidebarNavItems is-active" : "inactive"
            }
          >
            <li className="sidebarNavItems">Users List</li>
          </NavLink>

          <NavLink
            to="adduser"
            className={({ isActive }) =>
              isActive ? "sidebarNavItems is-active" : "inactive"
            }
          >
            <li className="sidebarNavItems">Add User</li>
          </NavLink>
        </ul>
        <li className="sidebarNavItems">
          <FaRegCalendarAlt
            color="#d1d1d1"
            size="25"
            style={{ marginRight: "10px" }}
          />
          Calender
        </li>
        <li className="sidebarNavItems">
          <FaFacebookMessenger
            color="#d1d1d1"
            size="25"
            style={{ marginRight: "10px" }}
          />
          Messages
        </li>
        <li className="sidebarNavItems">
          <FaCcMastercard
            color="#d1d1d1"
            size="25"
            style={{ marginRight: "10px" }}
          />
          Payment
        </li>
      </ul>
    </div>
  );
}
