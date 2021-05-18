import React from "react";
import "./loginpage.css"
import {Goldenrod } from "../../utils/colors";
import logo from "../../Style/assets/logo.png"

function LoginPage() {
  return (
    <div>
      <h1 className ="logintitle">Credentials</h1>
      <form>
        <div className="form-group">
          <label>Email or Username</label>
          <input
            type="email"
            className="form-control"
            id="login-email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" id="login-password" />
        </div>
        <button style = {{background: Goldenrod}} className="btn rounded pill mt-2">
          npm start
        </button>
        <img src={logo} className= "codemonkey" alt="logo" style={{ width:"375px" }} />
      </form>
    </div>
  );
}

export default LoginPage;
