import React from "react";

class signupPage extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ name: value });
    console.log(name);
  };

  handleSubmit = (e) => {
    console.log("button clicked");
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Create Account</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="login-password"
              aria-describedby="emailHelp"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="username"
              name="userName"
              className="form-control"
              id="signUp-username"
              required
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="signUp-password"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Skill (Language)</label>
            <input
              type="string"
              className="form-control"
              id="signup-skill"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="string"
              className="form-control"
              id="signup-location"
              required
              onChange={this.handleChange}
            />
          </div>
          <button
            onSubmit={this.handleSubmit}
            type="submit"
            className="btn btn-primary rounded-pill"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default signupPage;
