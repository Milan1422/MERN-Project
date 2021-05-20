// react components
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// local components
import "./App.css";
import Landing from "./pages/Landing/landing";
import FormSignup from "./pages/SignupPage/FormSignup";
import LoginPage from "./pages/LoginPage/loginpage";
import Profile from "./pages/Profile/profilePage";
import { Provider } from "react-redux";
import store from "../src/store";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={FormSignup} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
