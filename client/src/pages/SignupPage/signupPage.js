import React from "react";
import useForm from "./useForm";
import { Link } from "react-router-dom";
import "./signupPage.css"
import logo from "../../Style/assets/logo.png"

const SignUpPage = () => {
  const { handleChange, values, handleSubmit } = useForm();

  return (
    <div className="form-content-center">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="signup-title">Create Account</h1>
        <div className="accounted">
        <span className="form-input-login ">
          Already have an account? Login <Link to="/login">here</Link>
        </span>
        </div>
        <div className="form-inputs username2">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="username"
            className="form-control"
            name="username"
            id="username"
            placeholder="Enter your username"
            required
            value={values.username}
            onChange={handleChange}
          />
        </div>
       
        

        <div className="form-inputs email">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Please enter your email address"
            aria-describedby="emailHelp"
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs password">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Create a unique password"
            required
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs skill">
          <label htmlFor="skill" className="form-label">
            Skill
          </label>
          <input
            type="input"
            className="form-control"
            name="skill"
            id="skill"
            placeholder="What are your coding skills?"
            aria-describedby="emailHelp"
            required
            value={values.skill}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs location">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="location"
            className="form-control"
            name="location"
            id="location"
            placeholder="What city are you located in?"
            aria-describedby="emailHelp"
            required
            value={values.location}
            onChange={handleChange}
          />
        </div>

        <button
          className="btn-sign"
          onSubmit={handleSubmit}
          type="submit"
        >Sign Up
        </button>

        <img
          src={logo}
          className="monkey1"
          alt="logo"
          style={{ width: "450px" }}
        />
      </form>
    </div>
  );
};

export default SignUpPage;
