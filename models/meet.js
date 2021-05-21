const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true}
});

const Meet = mongoose.model("Meet", meetSchema);

module.exports = Meet;