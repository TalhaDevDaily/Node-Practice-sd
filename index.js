const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://TalhaDevDaily:Bmwm3gtrrx7rx8@cluster1st.obvkoyj.mongodb.net/userEntries?appName=Cluster1st"
  )
  .then(function () {
    console.log("DB Connected");
  })
  .catch(function (err) {
    console.log("Failed to connect to DB 📅", err);
  });

const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
});

app.get("/", function (req, res) {
  res.send("Hello There! 👋");
});

app.post("/register", function (req, res) {
  res.send("Your account has successfully been registered 📝");
});

app.post("/login", function (req, res) {
  res.send("You are logged in log 🚂");
});

app.listen("8000", function () {
  console.log("Server has started 🐕‍🦺");
});
