import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./util/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
// local components
import Landing from "./pages/Landing/landing";
import Signup from "./pages/SignupPage/Signup";
import LoginPage from "./pages/LoginPage/login";
import Profile from "./pages/Profile/profilePage";
import Navbar from "./components/NavBar/Navbar";
import PrivateRoute from "./components/private-route/PrivateRoute";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
