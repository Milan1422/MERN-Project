import { useState } from "react";
import API from "../../utils/API";

// state and set state
const UseForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    skill: "",
    location: "",
  });

  // grabs input from form fields and stores them in the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // saves new user to mongodb after hitting submit button
  const handleSubmit = (e) => {
    if (values.username && values.email && values.password) {
      API.saveUser(values)
        .then((res) => function loginAfter() {
          alert("Signup Complete! Please go and log in.")
        })
        .catch((err) => console.log(err));
    }
  };

  return { handleChange, values, handleSubmit };
};

export default UseForm;
