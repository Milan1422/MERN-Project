const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  authChecker,
} = require("../controllers/AuthController");

// Registers a new User
router.post("/register", registerUser);

// Logs In a User, creates session in mongo store
// and returns a cookie containing sessionID, also called "session-id"
router.post("/login", loginUser);

router.delete("/logout", logoutUser);

router.get("/authchecker", authChecker);

module.exports = router;
