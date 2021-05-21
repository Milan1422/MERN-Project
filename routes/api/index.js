const router = require("express").Router();
const userRoutes = require("./users");
const meetRoutes = require("./meets");

// User routes
router.use("/users", userRoutes);
router.use("/meets", meetRoutes);

module.exports = router;