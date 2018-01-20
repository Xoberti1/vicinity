var Posts = sequelize.define("posts", {

  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
    len: [1]
  },

  upVote: {

    type: DataTypes.INTEGER,
    allowNull: false,

  },

  downVote: {

    type: DataTypes.INTEGER,
    allowNull: false,

  }


})

Post.associate = function (models) {
    // We're saying that a Post should belong to a user
    // A Post can't be created without a user  due to the foreign key constraint
    Post.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,

          }

        
        });
      }