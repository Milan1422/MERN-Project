import React from "react";
import Title from "../../components/AppTitle/appTitle";
import SignupBtn from "../../components/SignUp/signupButton";
import LoginBtn from "../../components/LogIn/loginButton";

function Landing() {
  return (
    <div>
      <Title />
      <div>
        <SignupBtn />
      </div>
      <div>
        <LoginBtn />
      </div>
    </div>
  );
}

export default Landing;
