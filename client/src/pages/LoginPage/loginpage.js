import React from "react";
import { Link } from "react-router-dom"
import logo from "../../Style/assets/logo.png"
import "./loginpage.css"

function LoginPage() {
  return (
    <div>
      <h1 className ="logintitle">Credentials</h1>
      <form className="login-form">
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
        <Link to = "/profile" className="btn-log">
          Login
        </Link>
        <img src={logo} className= "codemonkey" alt="logo" style={{ width:"300px" }} />
      </form>
    </div>
  );
}

export default LoginPage;
