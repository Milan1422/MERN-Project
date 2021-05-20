import Validator from "validator";
import isEmpty from "is-empty";

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.skill = !isEmpty(data.password) ? data.password : "";
  data.location = !isEmpty(data.password2) ? data.password2 : "";

  //Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Username field is required";
  }

  //Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  //Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (Validator.isEmpty(data.skill)) {
    errors.skill = "Confirm skill field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
