// Setup empty JS object to act as endpoint for all routes
let projectData = {};

//Express to runn server and routes
const express = require("express");
const bodyParser = require("body-parser");

//startup an instance of app
const app = express();
/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
const { request } = require("http");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

//port
const port = 8000;

// Spin up the server
app.listen(port, function () {
  console.log(`Starting server on port ${port}`);
});

// Initialize all route with a callback function

// Post Route
app.post("/add", function (req, res) {
  const data = req.body;
  projectData = {
    temp: data.temp,
    date: data.date,
    content: data.content,
  };
  res.send({ status: "success" });
});

// Callback function to complete GET '/all'
app.get("/all", function (req, res) {
  res.send(projectData);
});