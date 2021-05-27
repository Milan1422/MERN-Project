const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt")

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  skill: { type: String},
  location: { type: String},
  image: {type: String},
  date: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false}
});

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;
