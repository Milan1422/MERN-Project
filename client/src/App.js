// react components
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// local components
import "./App.css";
import Landing from "./pages/Landing/landing";
import SignupPage from "./pages/SingupPage/SignUpPage";
import LoginPage from "./pages/LoginPage/loginpage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
      </Switch>
    </Router>
  );
}

export default App;
