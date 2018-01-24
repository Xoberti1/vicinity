// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var express = require('express');
var app = express();
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads login.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    // authors route loads home.html
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
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