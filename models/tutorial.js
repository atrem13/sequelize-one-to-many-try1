'use strict';
module.exports = (sequelize, DataTypes) => {
  const tutorial = sequelize.define('tutorial', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        notNull:{
          msg: 'name cant be null'
        },
        notEmpty:{
          msg: 'name cant be empty string'
        }
      }
    },
    desc: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate:{
        notNull:{
          msg: 'desc cant be null'
        },  
        notEmpty:{
          msg: 'desc cant be empty string'
        }
      }
    }
  }, {
    tableName:'tutorials'
  });
  tutorial.associate = function(models) {
    // associations can be defined here
    tutorial.hasMany(models.comment, {
      foreignKey:'tutorial_id',
      as:'comments'
    });
  };
  return tutorial;
};