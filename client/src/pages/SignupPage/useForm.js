import { useState, useEFfect } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    skills: "",
    location: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return { handleChange, values, handleSubmit };
};
export default useForm;
