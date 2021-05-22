// react components
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// local components
import "./App.css";
import Landing from "./pages/Landing/landing";
import SignupPage from "./pages/SignupPage/signupPage";
import LoginPage from "./pages/LoginPage/loginpage";
import Profile from "./pages/Profile/profilePage";
import Meet from "./pages/Meets/Meets";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/meets" exact component={Meet} />
      </Switch>
    </Router>
  );
}

export default App;
