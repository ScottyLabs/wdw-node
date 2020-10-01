const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("WDW 2020");
});

app.get("/hello", (req, res) => {
  if (req.query.name) {
    res.send(`Hello there, ${name}!`);
  } else {
    res.send("Who goes there, stranger?");
  }
});

app.listen(5000, () => {
  console.log("Server started!");
});
