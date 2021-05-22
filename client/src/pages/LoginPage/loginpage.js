import React from "react";
import "./loginpage.css";
import { Goldenrod } from "../../utils/colors";
import logo from "../../Style/assets/logo.png";
import UseForm2 from "../../pages/LoginPage/useForm2";

const LoginPage = () => {
  const { handleChange, values, handleSubmit } = UseForm2();

  return (
    <div>
      <h1 className="logintitle">Credentials</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email or Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="login-password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
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
