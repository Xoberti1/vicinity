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

	app.get("/aboutus", function(req, res){
		res.render("aboutus",{
			title: "title"
		});
	});

	app.get("/whatisvicinity", function(req, res){
		res.render("whatisvicinity",{
			title: "title"
		});
	});

	app.get("/maps", function(req, res){
		res.render("maps",{
			title: "title"
		});
	});
};