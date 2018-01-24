//Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config");

// Creates a model that matches up with DB
var User = sequelize.define("user", {

    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    streetAddress: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    zip: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            len: [5,10]
        }
    },

});

User.associate = function (models) {
    // We're saying that a user should be associated with a post
    // When an User is deleted, also delete any associated Posts (I don't actually know if we want to do this or not).
    User.hasMany(models.Post, {
        onDelete: "cascade"
    });
};

return User;

// Syncs with DB
// This actually works best in the server to ensure that the database is active the entire time the user is on the site.
User.sync();
// Makes the App Model available for other files (will also create a table)
module.exports = User;