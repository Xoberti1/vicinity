// Dependencies
// =============================================================
var express = require('express');
var app = express();
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

	app.get("/", function(req, res){
		res.render("index",{
			title: "title"
		});
	});

	app.get("/profile", function(req, res){
		res.render("profile",{
			title: "title"
		});
	});

	app.get("/crimes", function(req, res){
		res.render("crimes",{
			title: "title"
		});
	});

	app.get("/firstresponders", function(req, res){
		res.render("firstresponders",{
			title: "title"
		});
	});

    // authors route loads profile.html
    app.get("/profile", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/profile.html"));
    });

    // authors route loads crimeform.html
    app.get("/crimeform", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/crimeform.html"));
    });

    // authors route loads firstresponderform.html
    app.get("/firstresponderform", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/firstresponderform.html"));
    });
};