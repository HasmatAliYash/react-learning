import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    isAuthenticate(username, password).then((data) => {
      localStorage.setItem("authenticationTokenName", data.token);
      localStorage.getItem("authenticationTokenName");
      if (data.token == null) {
        return false;
      } else {
        navigate("/dashboard");
        return true;
      }
    });
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="app-logo">Yms</h2>
        <div className="row text-center">
          <div className="col-6 offset-3">
            <form onSubmit={submitForm}>
              <div className="form-group mb-4 mt-4">
                <input
                  name="email"
                  type="text"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group mb-4">
                <input
                  name="password"
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <button type="button" className="btn btn-secondary mx-3">
                Cancel
              </button>
              <br />
              <br />
              OR
              <br />
              <br />
              <div className="row">
                <div className="col-8 offset-2 mb-2">
                  <button type="button" className="btn btn-outline-primary">
                    Login with Facebook
                  </button>
                </div>
                <div className="col-8 offset-2">
                  <button type="button" className="btn btn-outline-danger">
                    Login with Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export const isAuthenticate = (userName, userPassword) => {
  let BaseUrl = "https://reqres.in/api/login";
  let userData = {
    email: userName,
    password: userPassword,
  };
  console.log("userData", userData);
  return new Promise((resolve, reject) => {
    fetch(BaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
