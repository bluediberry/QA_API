module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    content: DataTypes.TEXT,
    validated: DataTypes.BOOLEAN
  });

  Answer.associate = (models) => {
    Answer.belongsTo(models.Question);
  };

  return Answer;
};