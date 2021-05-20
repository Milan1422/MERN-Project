import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/AppTitle/appTitle";
import SignupBtn from "../../components/SignUp/signupButton";
import LoginBtn from "../../components/LogIn/loginButton";
import logo from "../../Style/assets/logo.png";
import "../Landing/landing.css";
import { getFromStorage, setInStorage } from "../../utils/storage";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: "",
      signUpError: "",
      signInError: "",
      signInEmail: "",
      signInPassword: "",
      signInUsername: "",
    };
  }

  componentDidMount() {
    const token = getFromStorage("the_main_app");
    if (token) {
      fetch("/api/verify?token=" + token)
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false,
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const {
      isLoading,
      token,
      signInEmail,
      signInPassword,
      signInUsername,
      signInError,
    } = this.state;
    if (isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    if (!token) {
      return (
        <div>
          <p>Sign In</p>
          <p>Sign Up</p>
        </div>
      );
    }

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
                  <span className="label">
                    Hear what people are talking about.
                  </span>
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
    );
  }
}

export default Landing;
