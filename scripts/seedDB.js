const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userlist");

const userSeed = [
  {
    name: "Jesus Milan",
    email: "jesusm@email.com",

    password: "password123",
    skill: "Javascript",
    location: "Kennesaw",
    image: "https://randomuser.me/api/portraits/lego/6.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Lee Spaulding",
    email: "lees@email.com",

    password: "password123",
    skill: "HTML",
    location: "Lithonia",
    image: "https://randomuser.me/api/portraits/lego/0.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Anthony Dominguez",
    email: "anthonyd@email.com",

    password: "password123",
    skill: "CSS",
    location: "Duluth",
    image: "https://randomuser.me/api/portraits/lego/8.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Eiman Zarrinhonar",
    email: "eimanz@email.com",

    password: "password123",
    skill: "Javascript",
    location: "Atlanta",
    image: "https://randomuser.me/api/portraits/lego/5.jpg",
    date: new Date(Date.now()),
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
