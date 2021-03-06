import { useState } from "react";
import API from "../../utils/API";

const UseForm2 = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.email && values.password) {
      API.signUser(values)
        .then((res) => console.log("button"))
        .catch((err) => console.log(err));
    }
  };
  return { handleChange, handleSubmit, values };
};

export default UseForm2;
