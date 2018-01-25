var Sequelize = require("sequelize");

  var Posts = {

    IncidentDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    IncidentTime: {
      type: Sequelize.TIME,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    IncidentType: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    IncidentDescription: {
      type: Sequelize.TEXT,
      allowNull: false,
      len: [1]
    },

    address: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    city: {
        type: Sequelize.STRING,
        allowNull: false
    },

    state: {
        type: Sequelize.STRING,
        allowNull: false
    },

    zipCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            len: [5,10]
        }
    },

    lat: {
      type: sequelize.INTEGER,
    },

    long: {
      type: sequelize.INTEGER,
    },

    upVote: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    downVote: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }


  }

  module.exports = Posts;