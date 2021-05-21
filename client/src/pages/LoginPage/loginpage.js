import React from "react";
import "./loginpage.css";
import { Goldenrod } from "../../utils/colors";
import logo from "../../Style/assets/logo.png";
import useForm2 from "../../pages/LoginPage/useForm2";

const LoginPage = () => {
  const { handleChange, values, handleSubmit } = useForm2();

  return (
    <div>
      <h1 className="logintitle">Credentials</h1>
      <form>
        <div className="form-group">
          <label>Email or Username</label>
          <input
            type="email"
            className="form-control"
            id="login-email"
            aria-describedby="emailHelp"
            placeholder="Enter your email address"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="login-password"
            placeholder="Enter your password"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <button
          style={{ background: Goldenrod }}
          className="btn rounded pill mt-2"
          onSubmit={handleSubmit}
        >
          Log in
        </button>
        <img
          src={logo}
          className="codemonkey"
          alt="logo"
          style={{ width: "375px" }}
        />
      </form>
    </div>
  );
};

export default LoginPage;
