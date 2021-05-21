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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (values.username && values.email && values.password) {
      API.saveUser(values).then(res =>console.log(res)).catch(err => console.log(err))
    }
  };

  return { handleChange, values, handleSubmit };

};

export default UseForm;
