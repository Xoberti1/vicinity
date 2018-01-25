// Server.js - This file is the initial starting point for the Node/Express server.
// Not sure what all npm packages we will be using 
var express = require("express");
var bodyParser = require("body-parser");
<<<<<<< HEAD
var sequelize = require("sequelize");
=======
var path = require("path");
>>>>>>> e9a479a77453c5d84a9533a8e7812f68f031bfd3

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//require my route
require("./routes/html-routes.js")(app);
require("./routes/user-routes.js")(app);
require("./routes/vicinity-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
