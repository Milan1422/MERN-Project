import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Landing extends Component {
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    console.log(this.props);
    return (
      <div className="container text-center mt-15">
        <div className="row">
          <div className="col-sm-12">
            <h4>
              Profile Page{" "}
              <p className="mt-4">
                Welcome to your Profile{" "}
                <span style={{ fontFamily: "monospace" }}>CODE PALS</span> app
              </p>
            </h4>
            <button
              onClick={this.onLogout}
              className="btn btn-large btn-light hoverable font-weight-bold"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Landing);
