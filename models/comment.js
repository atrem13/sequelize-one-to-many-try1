'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    tutorial_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate:{
        notNull:{
          msg: 'tutorial unselected'
        },
        notEmpty:{
          msg: 'tutorial doesnt exist'
        }
      }
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notNull:{
          msg: 'comment undifiend'
        },
        notEmpty:{
          msg: 'comment cant be empty'
        }
      }
    }
  }, {
    tableName:'comments'
  });
  comment.associate = function(models) {
    // associations can be defined here
    comment.belongsTo(models.tutorial, {
      foreignKey:'tutorial_id',
      as:'tutorial'
    });
  };
  return comment;
};