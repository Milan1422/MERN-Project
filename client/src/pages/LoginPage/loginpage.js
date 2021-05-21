import React from "react";
import "./loginpage.css";
import { Goldenrod } from "../../utils/colors";
import logo from "../../Style/assets/logo.png";

class LoginPage extends React.Component {
  state = {
    account: { username: "", password: "" },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (values.username && values.email && values.password) {
      API.getUser(values)
        .then(
          (res) =>
            function login() {
              res.redirect("/login");
            }
        )
        .catch((err) => console.log(err));
    }
    console.log(this.handleSubmit);
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.target.value;

    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1 className="logintitle">Credentials</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email or Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={this.state.account.username}
              onChange={this.handleChange}
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
              value={this.state.account.password}
              onChange={this.handleChange}
            />
          </div>
          <button
            style={{ background: Goldenrod }}
            className="btn rounded pill mt-2"
            onSubmit={this.handleSubmit}
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
  }
}

export default LoginPage;
