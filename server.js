var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3000;

var Model = require("./model.js");

var app = express();

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));


mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/nytreact", {
  useMongoClient: true
});

app.post("/submit", function(req, res) {
    // Create a new user using req.body
    User.create(req.body)
      .then(function(dbUser) {
        // If saved successfully, send the the new User document to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        // If an error occurs, send the error to the client
        res.json(err);
      });
  });
  
  app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  