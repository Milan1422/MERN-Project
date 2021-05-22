import { useState } from "react";
import API from "../../utils/API";

const UseForm2 = () => {
  const [values, setValues] = useState({
    username: "",
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

    if (values.username || (values.email && values.password)) {
      API.getUser(values)
        .then(
          (res) =>
            function goToProfile() {
              res.redirect("/profile");
            }
        )
        .catch((err) => console.log(err));
    }
  };
  return { handleChange, handleSubmit, values };
};

export default UseForm2;
