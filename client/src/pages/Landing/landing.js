import React from "react";
import { Link } from "react-router-dom"
import Title from "../../components/AppTitle/appTitle";
import SignupBtn from "../../components/SignUp/signupButton";
import LoginBtn from "../../components/LogIn/loginButton";
import logo from "../../Style/assets/logo.png";
import "../Landing/landing.css";

function Landing() {
  return (
    <div classs="container-fluid">
      <div className="main">
      <div className="wrapper">
        <div className="left">
          <div className="items-wrapper">
            <div className="item">
              <span className="icon">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
              <span className="label">Follow your interests.</span>
            </div>
            <div className="item">
              <span className="icon">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
              <span className="label">Hear what people are talking about.</span>
            </div>
            <div className="item">
              <span className="icon">
                <i className="fa fa-comment" aria-hidden="true"></i>
              </span>
              <span className="label">Join the conversation.</span>
            </div>
          </div>
        </div>
        <div className="center">
          <img src={logo} alt="logo" style={{ width: "200px" }} />
       
          <span>Join The Family Today.</span>
          <Link to="/signup" className="btn-sign-up">
            Sign up
          </Link>
          <Link to="/login" className="btn-login">
            Log in
          </Link>
        </div>
        </div>
      </div>
      </div>

   

  
  )
}

export default Landing;
