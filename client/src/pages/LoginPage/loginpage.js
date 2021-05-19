import React from "react";

function LoginPage() {
  return (
    <div>
      <h1>Sign in</h1>
      <form>
        <div className="form-group">
          <label>Email address</label>
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
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
