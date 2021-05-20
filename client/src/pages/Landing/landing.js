import React, { Component } from "react";

import "../Landing/landing.css";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Login from "../LoginPage/login";
import Signup from "../SignupPage/Signup";
import { connect } from "react-redux";

import { Button } from "reactstrap";
import PropTypes from "prop-types";

import store from "../../store";
import { isAuth } from "../../actions/authActions";

export class Landing extends Component {
  componentDidMount() {
    // Check if session cookie is present
    store.dispatch(isAuth());
  }

  static propTypes = {
    button: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/profile" />;
    }

    return (
      <div className="container">
        <div className="main">
          <div>
            <BrowserRouter>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
              </Switch>
            </BrowserRouter>
            {this.props.button && (
              <Link className="divStyle" to="/login">
                <Button size="lg" color="light">
                  Sign In
                </Button>
              </Link>
            )}

            {this.props.button && (
              <Link className="divStyle" to="/register">
                <Button size="lg" color="light">
                  Register
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  //Maps state to redux store as props
  button: state.ui.button,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
