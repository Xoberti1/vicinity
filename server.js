// Server.js - This file is the initial starting point for the Node/Express server.
// Not sure what all npm packages we will be using 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8090;

// Requiring our models for syncing
var db = require("./models");

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public'));
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

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  })
});

// app.listen(PORT, () => {
//   console.log("Your server has started.")
//   db.sequelize.sync({}).then(() => {
//     console.log("Your database is online.");
//     db.User.create(
//       {
//         name: "xavier oberti",
//         username: "xoberti@gmail.com",
//         password: "catinthehat",
//         city: "harris county",
//         state: "TX",
//         Address: "11526 Moonmist Drive",
//         zipCode: 77072,
//       }
//     )
//   })
// });