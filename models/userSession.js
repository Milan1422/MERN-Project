const mongoose = require("mongoose");

const UserSessionSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: " ",
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const userSession = mongoose.model("UserSession", UserSessionSchema);

module.exports = userSession;
