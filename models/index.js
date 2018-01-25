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

db.Post = sequelize.define('posts', Post);
db.User = sequelize.define('user', User);

Post.associate = function(models) {
  Post.belongsTo(models.User, {
    foreignKey: {
      allowNull: false
    }
  });
};

User.associate = function(models) {
  User.hasMany(models.Post, {
    foreignKey: {
      allowNull: false
    }
  });
};

// db.Post.belongsTo(User);
// db.User.hasMany(Posts);

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
