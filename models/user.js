
//Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// Creates a model that matches up with DB
var User = {

    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },

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
    Address: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    zipCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            len: [5,10]
        }
    },

};

// Makes the App Model available for other files (will also create a table)
module.exports = User;

