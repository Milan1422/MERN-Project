import React from "react";
import useForm from "./useForm";

const SignUpPage = () => {
  const { handleChange, values, handleSubmit } = useForm();
  console.log(values.email);
  console.log(values.username);
  return (
    <div className="form-content-center">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <div className="form-inputs">
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

        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            username
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

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            password
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

        <div className="form-inputs">
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

        <div className="form-inputs">
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
          className="form-input-button btn btn-primary rounded-pill"
          onSubmit={handleSubmit}
          type="submit"
        >
          Sign Up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default SignUpPage;
