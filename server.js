const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
console.log(process.env.DATABASE);
const authRoutes = require("./routes/api/auth");
const { db } = require("./models/user");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Connect to the Mongo DB
mongoose
  .connect(process.env.DATABASE || "mongodb://localhost:27017/codepals", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));

app.use(bodyParser.json());
her;
app.use(cors());
app.use("/api", authRoutes);
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
