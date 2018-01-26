'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};
var Post      = require('./posts.js');
var User      = require('./user.js');

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.Post = sequelize.define('posts', Post, {timestamps: false});
db.User = sequelize.define('user', User, {timestamps: false});

// Post.associate = function(models) {
//   Post.belongsTo(models.User, {
//     foreignKey: {
//       allowNull: false
//     }
//   });
// };

// User.associate = function(models) {
//   User.hasMany(models.Post, {
//     foreignKey: {
//       allowNull: false
//     }
//   });
// };


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
