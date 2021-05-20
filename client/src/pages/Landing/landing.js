import React, { Component } from "react";

import "../Landing/landing.css";

import Login from "../LoginPage/login";
import Register from "../SignupPage/Register";
import { connect } from "react-redux";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { buttonClicked } from "../../actions/frontEndActions";

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
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Register} />
            </Switch>

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
