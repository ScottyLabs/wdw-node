const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Crash Course 2021");
});

app.get("/hello", (req, res) => {
  if (req.query.name) {
    res.send(`Hello there, ${req.query.name}!`);
  } else {
    res.send("Who goes there, stranger?");
  }
});

app.listen(5000, () => {
  console.log("Server started!");
});
