module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('Question', {
      title: DataTypes.STRING,
      content: DataTypes.TEXT
    });
  
    Question.associate = (models) => {
      Question.hasMany(models.Answer);
    };
  
    return Question;
  };