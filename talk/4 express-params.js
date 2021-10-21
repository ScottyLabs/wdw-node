const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Crash Course 2021");
});

app.get("/user/:username", (req, res) => {
  const { username } = req.params;
  res.send(`Welcome ${username}`);
});

app.listen(5000, () => {
  console.log("Server started!");
});
