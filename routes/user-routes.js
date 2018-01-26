var db = require("../models");

module.exports = function (app) {
	app.get("/api/users", function (req, res) {
		db.User.findAll({
			include: [db.Post]
		}).then(function (dbUser) {
			res.json(dbUser);
		});
	});

	app.get("/api/users/:id", function (req, res) {
		db.User.findOne({
			where: {
				id: req.params.id
			},
			include: [db.Post]
		}).then(function (dbUser) {
			res.json(dbUser);
		});
	});

	app.post("/api/users", function (req, res) {
		console.log(req.body);
		db.User.create({
			name: req.body.name,
			streetAddress: req.body.streetAddress,
			city: req.body.city,
			state: req.body.state,
			zipCode: req.body.zipCode,
			username: req.body.username,
			password: req.body.password
		}).then(function (dbUser) {
			res.json(dbUser);
		});
	});

	app.delete("/api/users/:id", function (req, res) {
		db.User.destroy({
			where: {
				id: req.params.id
			}
		}).then(function (dbUser) {
			res.json(dbUser);
		});
	});

};