const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const pizzas = require("./pizzas.json");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/pizzas", (req, res) => {
  res.json(pizzas);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
