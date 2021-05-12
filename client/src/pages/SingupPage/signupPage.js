import React from "react";

function SignupPage() {
  return (
    <div>
      <h1>Create Account</h1>
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="login-password"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="signup-password"
          />
        </div>
        <div className="form-group">
          <label>Skill (Language)</label>
          <input type="password" className="form-control" id="signup-skill" />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="password"
            className="form-control"
            id="signup-location"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
