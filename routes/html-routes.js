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

    app.get("/profile", function (req, res) {
        // console.log(new Date())
        db.User.findOne({
            where: {
                id: 1
			},
        }).then(function (userData) {
			// console.log("userdata: " + userData.zipCode);
            db.Post.findAll({
				limit: 10,
				// order: '"IncidentDate", DESC',
                where: {
					zipCode: userData.zipCode
				},
				includes: userData
			}).then(function (dbPost) {
                obj = {
					post: dbPost,
					user: userData
                }
                // console.log(obj)
                res.render("profile", obj);
            });
        })
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

	app.get("/about_us", function(req, res){
		res.render("about_us",{
			title: "title"
		});
	});

	app.get("/what_is_vicinity", function(req, res){
		res.render("what_is_vicinity",{
			title: "title"
		});
	});

	app.get("/registry", function (req, res) {
		res.render("registry", {
			title: "title"
		});
	});

	app.get("/report_crime", function (req, res) {
		res.render("report_crime", {
			title: "title"
		});
	});
	app.get("/maps", function (req, res) {
		res.render("maps", {
			title: "title"
		});
	});
};