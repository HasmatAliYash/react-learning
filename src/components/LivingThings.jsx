import Button from "react-bootstrap/Button";
import React from "react";
import { Link } from "react-router-dom";

export default function LivingThings() {
  return (
    <div>
      <ul style={{ listStyle: "none", fontSize: "24px" }}>
        <li>
          <Button style={{ background: "#fff" }}>
            <Link to="users">Users</Link>
          </Button>
        </li>
        <li>
          <Button style={{ background: "#fff" }}>
            <Link to="birds">Birds</Link>
          </Button>
        </li>
        <li>
          <Button style={{ background: "#fff" }}>
            <Link to="employees">Employees</Link>
          </Button>
        </li>
        <li>
          <Button style={{ background: "#fff" }}>
            <Link to="animals">Animals</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
