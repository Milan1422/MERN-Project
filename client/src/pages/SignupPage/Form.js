import { useState } from "react";
import FormSignup from "./FormSignup";
import LoginPage from "./LoginPage/loginpage";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      <FormSignup />
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <loginpage />}
    </div>
  );
};

export default Form;
