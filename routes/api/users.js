const express = require("express");
const router = express.Router();
const {
  signupUser,
  loginUser,
  logoutUser,
  authChecker,
} = require("../../controllers/usersController");

const {
  signupUser,
  loginUser,
  logoutUser,
  authChecker,
} = require("../../controllers/usersController");

router.post("/signup", signupUser);

// Logs In a User, creates session in mongo store
// and returns a cookie containing sessionID, also called "session-id"
router.post("/login", loginUser);

router.delete("/logout", logoutUser);

router.get("/authchecker", authChecker);

module.exports = router;
