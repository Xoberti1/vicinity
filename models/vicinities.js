
// Creates a model that matches up with DB
var User = sequelize.define("users", {
  
  
    
    firstName: { 
        type: Sequelize.STRING,
         allowNull: false},
    lastName: { 
         type: Sequelize.STRING,
         allowNull: false},  
    
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

    city : {
        type: Sequelize.STRING,
         allowNull: false
    },   
    street: { 
        type: Sequelize.STRING(256),
         allowNull: false
    },
    zip: {
         type: Sequelize.INTEGER(10),
          allowNull: false,
          validate: {
            len: [5,10]
          }
    }
});

  User.associate = function(models) {
      // Associating User with Posts
      // When a User  is deleted, also delete any associated Posts
      User.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    module.exports = User

