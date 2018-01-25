
var Post = sequelize.define("posts", {

      incidentDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

        incidentTime: {
          type: DataTypes.TIME,
          allowNull: false,
          validate: {
            len: [1]
          },

          incidentType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },

          incidentDescription: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
          },

          address: {
            type: Sequelize.STRING(256),
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

          zip: {
            type: Sequelize.INTEGER(10),
            allowNull: false,
            validate: {
              len: [5, 10]
            }
          },

          LAT: {
            type: Sequelize.INTEGER(10),
            allowNull: false,
            validate: {
              len: [5, 10]
            }
          },

          LONG: {
            type: Sequelize.INTEGER(10),
            allowNull: false,
            validate: {
              len: [5, 10]
            }
          },

          upVote: {

            type: DataTypes.INTEGER,
            allowNull: false,

          },

          downVote: {

            type: DataTypes.INTEGER,
            allowNull: false,

          }
        }
      });

      Post.associate = function (models) {
        // We're saying that a Post should belong to a user
        // A Post can't be created without a user  due to the foreign key constraint
        Post.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,

   


  }


        });
      }
      module.exports = Post
