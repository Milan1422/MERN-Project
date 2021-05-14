import React from "react";

function SignupPage() {
  return (
    <div>
      <h1>Create Account</h1>
      <form id ="signup-form">
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
          <label>User Name</label>
          <input
            type="username"
            className="form-control"
            id="signUp-username"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="signUp-password"
          />
        </div>
        <div className="form-group">
          <label>Skill (Language)</label>
          <input type="string" className="form-control" id="signup-skill" />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="string"
            className="form-control"
            id="signup-location"
          />
        </div>
        <button type="submit" className="btn btn-primary rounded-pill">
          Sign Up
        </button>
      </form>
    </div>
  );
 
 
  async function signupFormHandler(event) {
    event.preventDefault();
    

    // getting data from the form
    const username = document.querySelector('#signUp-username').value;
    console.log(username);
    const password = document.querySelector('#signUp-password').value;
    console.log(password);
    if (username && password) {
      console.log('hello');
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({
            username,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        }); 
    // check the response status
    if (response.ok) {
        console.log('success');

        // loginHandler();
        document.location.replace('/profile');

      } else {
        alert(response.statusText);
      }
    }
}






}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler) 

export default SignupPage;
