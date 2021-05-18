const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/userlist"
);

const userSeed = [
  {
    username: "Jesus Milan",
    email: "jesusm@email.com",
    username: "rebel",
    password: "password123",
    skill: "Javascript",
    location: "Kennesaw",
    image: "https://randomuser.me/api/portraits/lego/6.jpg",
    date: new Date(Date.now())
  },
  {
    username: "Lee Spaulding",
    email: "lees@email.com",
    username: "sheriff",
    password: "password123",
    skill: "HTML",
    location: "Lithonia",
    image: "https://randomuser.me/api/portraits/lego/0.jpg",
    date: new Date(Date.now())
  },
  {
    username: "Anthony Dominguez",
    email: "anthonyd@email.com",
    username: "bandit",
    password: "password123",
    skill: "CSS",
    location: "Duluth",
    image: "https://randomuser.me/api/portraits/lego/8.jpg",
    date: new Date(Date.now())
  },
  {
    username: "Eiman Zarrinhonar",
    email: "eimanz@email.com",
    username: "outlaw",
    password: "password123",
    skill: "Javascript",
    location: "Atlanta",
    image: "https://randomuser.me/api/portraits/lego/5.jpg",
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