import React from "react";
import "../App.css";
export default function LoginComponent() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="app-logo">Yms</h2>
        <div className="row text-center">
          <div className="col-6 offset-3">
            <form>
              <div class="form-group mb-4 mt-4">
                <input
                  type="email"
                  class="form-control form-control-lg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Username"
                />
              </div>
              <div class="form-group mb-4">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Login
              </button>
              <button type="button" class="btn btn-secondary mx-3">
                Cancel
              </button>
              <br />
              <br />
              OR
              <br />
              <br />
              <div className="row">
                <div className="col-8 offset-2 mb-2">
                  <button type="button" class="btn btn-outline-primary">
                    Login with Facebook
                  </button>
                </div>
                <div className="col-8 offset-2">
                  <button type="button" class="btn btn-outline-danger">
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
