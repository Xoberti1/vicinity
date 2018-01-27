// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts
  app.get("/api/posts", function (req, res) {
    var query = {};
    if (req.query.User_id) {
      query.UserID = req.query.User_id;
    }

    db.Post.findAll({
      where: query,
      include: [db.User]
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/posts", function (req, res) {
    db.Post.findAll({
      where: zipCode,
      include: [db.User.zipCode]
    }).then(function (dbPost) {
      res.json(dbPost);
    })
  })

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function (req, res) {
    db.Post.findOne({
      where: {
        zip: req.params.zipCode
      },
      include: [db.User]
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function (req, res) {
    console.log(req.body);
    db.Post.create({
      type: req.body.type,
      location: req.body.location,
      description: req.body.description,
      date: req.body.date,
      time: req.body.time,
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function (req, res) {
    db.Post.update(
      req.body, {
        where: {
          id: req.body.id
        }
      }).then(function (dbPost) {
      res.json(dbPost);
    });
  });
};