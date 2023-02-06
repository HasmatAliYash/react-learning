import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Privateroute = (props) => {
  console.log(localStorage.getItem("authenticationTokenName"));
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("authenticationTokenName");
    if (!token) {
      navigate("/login");
    }
  });
  return <Component></Component>;
};

export default Privateroute;
