import { useState, useEffect } from "react";

const UseForm2 = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("button clicked");
  };
  return { handleChange, values, handleSubmit };
};

export default UseForm2;
