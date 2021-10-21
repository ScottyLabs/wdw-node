const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Crash Course 2021");
});

app.post("/submit", (req, res) => {
  const { name, address } = req.body;
  console.log(`Welcome, ${name}.`)
  console.log("Your address is:")
  for (const addressLine of address) {
    console.log(addressLine);
  }
  res.send("Your form has been submitted.");
});

app.listen(5000, () => {
  console.log("Server started!");
});
