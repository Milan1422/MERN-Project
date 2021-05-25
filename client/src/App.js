// react components
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// local components
import "./App.css";
import Landing from "./pages/Landing/landing";
import SignupPage from "./pages/SignupPage/signupPage";
import LoginPage from "./pages/LoginPage/loginpage";
import Profile from "./pages/Profile/profilePage";
import Meets from "./pages/Meets/Meets";
import singleMeet from "./pages/Meets/singleMeet";
import { StoreProvider } from "./utils/GlobalState";
import CreateNewMeet from "./pages/Meets/createMeet";
import JoinedList from "./pages/Meets/joinedMeets";
import history from "./utils/history"

function App() {
  return (
    <Router history={history}>
      <div>
        <StoreProvider>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={SignupPage} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/meets" exact component={Meets} />
            <Route path="/meets/:id" exact component={singleMeet} />
            <Route path="/createmeet" exact component={CreateNewMeet} />
            <Route path="/joinedmeets" exact component={JoinedList} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
