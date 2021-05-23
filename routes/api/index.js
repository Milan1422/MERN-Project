const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const meetRoutes = require("./meets");

// User routes
router.use("/users", userRoutes);
router.use("/meets", meetRoutes);
router.use("/auth", authRoutes);

module.exports = router;
