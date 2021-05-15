import React from "react";
import Title from "../../components/AppTitle/appTitle";
import SignupBtn from "../../components/SignUp/signupButton";
import LoginBtn from "../../components/LogIn/loginButton";
import logo from "../../Style/assets/logo.png"
import "../Landing/landing.css";

function Landing() {
  return (
   <div className="main">
     <div className="wrapper">
       <div className="left">
         <div className="items-wrapper">
         </div>
       </div>


       <div className="center">
         <img src={logo} alt="logo" style={{ width:"475px" }} />
        <div>
          <h1> Join <Title /></h1>
          <div>
         <a href="/signup"></a> <SignupBtn />
          </div>
          <div>
            <LoginBtn />
          </div>
        </div>
       </div>
     </div>
   </div>
  );
}

export default Landing;
