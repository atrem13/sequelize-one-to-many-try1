'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    tutorial_id: DataTypes.INTEGER,
    text: DataTypes.TEXT
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