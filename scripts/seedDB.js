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

const meetSeed = [
  {
    title: "MongoDB and Heroku",
    description: "Discussing MongoDB and Heroku deployment to be used in MERN applications. Come and join us for this topic!",
    location: "Atlanta",
    date: new Date(Date.now())
  },
  {
    title: "HTML",
    description: "Discussing simple topics on how to start your simple html webpage! We will cover essentials from tags to maybe some styling!",
    location: "Duluth",
    date: new Date(Date.now())
  },
  {
    title: "Landing your first job interview",
    description: "Discussing tips and tricks to exel in your first coding interview, please come and join this discussion that will help you have the upper hand to land that dream job you always wanted!",
    location: "Stone Mountain",
    date: new Date(Date.now())
  },
];

db.Meet
  .remove({})
  .then(() => db.Meet.collection.insertMany(meetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });