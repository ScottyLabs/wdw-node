const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Crash Course 2021");
});

app.listen(5000, () => {
  console.log("Server started!");
});
