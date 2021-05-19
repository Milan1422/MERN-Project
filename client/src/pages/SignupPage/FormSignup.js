import React from "react";
import useForm from "../../pages/SingupPage/useForm";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit } = useForm();

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1> Sign Up!</h1>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-input"
            placeholder="Create a Username"
            value={values.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            placeholder="Create a unique Password"
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="Skill" className="form-label">
            Skill
          </label>
          <input
            type="text"
            name="skill"
            id="skill"
            className="form-input"
            placeholder="List your coding skills!"
            value={values.skill}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="Location" className="form-label">
            Location
          </label>
          <input
            type="text"
            name="Location"
            id="location"
            className="form-input"
            placeholder="What city are you in?"
            value={values.location}
            onChange={handleChange}
          />
        </div>
        <button className="form-input-btn btn-primary" type="submit">
          Sign Up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
