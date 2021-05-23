import { useState } from "react";
import API from "../../utils/API";
const UseForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    skill: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    if (values.username && values.email && values.password) {
      API.saveUser(values);
      console
        .log(values)
        .then(
          (res) =>
            function loginAfter() {
              alert("Signup Complete! Please go and log in.");
            }
        )
        .catch((err) => console.log(err));
    }
  };
  return { handleChange, handleSubmit, values };
};

export default UseForm;
