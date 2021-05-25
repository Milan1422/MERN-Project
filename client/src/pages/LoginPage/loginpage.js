import React from "react";
import "./loginpage.css";
import logo from "../../Style/assets/logo.png";
import UseForm2 from "./useForm2";
import history from "../../utils/history";

const LoginPage = () => {
  const { handleChange, values, handleSubmit } = UseForm2();

  return (
    <div>
      <h1 className="login-title">Credentials</h1>
      <form className ="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your Email"
            value={values.email}
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
          className="btn-log"
          onSubmit={handleSubmit}
          onClick={(event) => history.push("/profile")}
        >
          Log in
        </button>
        <img
          src={logo}
          className="code-monkey"
          alt="logo"
          style={{ width: "300px" }}
        />
      </form>
    </div>
  );
};

export default LoginPage;
