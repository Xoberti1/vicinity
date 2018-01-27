// Dependencies
// =============================================================
var express = require('express');
var app = express();
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

	app.get("/", function(req, res){
		res.render("index",{
			title: "title",
		});
	});

	app.get("/profile", function(req, res){
<<<<<<< HEAD
		res.render("profile",{
			title: "title"
		});
	});
	// app.get("/profile", function (req, res) {
	// 	db.User.findOne({
	// 		where: {
	// 			password: req.body.password
	// 		}
	// 	}).then(function (userData) {
	// 		console.log("userdata: " + userData);
	// 		db.Post.findAll({
	// 			where: {
	// 				zipCode: userData.zipCode
	// 			}
	// 		}).then(function (dbPost) {
	// 			dbPost.title = 'title';
	// 			res.render("profile", { post: dbPost.title });
	// 		});
	// 	})
	// });

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

	app.get("/registry", function (req, res) {
		res.render("registry", {
			title: "title"
		});
	});

	app.get("/crimeform", function (req, res) {
		res.render("crimeform", {
			title: "title"
		});
	});
};