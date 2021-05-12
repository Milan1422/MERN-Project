const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/userlist"
);

const userSeed = [
  {
    email: "jesusm@email.com",
    password: "password123",
    skill: "Javascript",
    location: "Kennesaw",
    date: new Date(Date.now())
  },
  {
    email: "lees@email.com",
    password: "password123",
    skill: "HTML",
    location: "Lithonia",
    date: new Date(Date.now())
  },
  {
    email: "anthonyd@email.com",
    password: "password123",
    skill: "CSS",
    location: "Duluth",
    date: new Date(Date.now())
  },
  {
    email: "eimanz@email.com",
    password: "password123",
    skill: "Javascript",
    location: "Atlanta",
    date: new Date(Date.now())
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });