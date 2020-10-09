const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("WDW 2020");
});

app.listen(5000, () => {
  console.log("Server started!");
});
