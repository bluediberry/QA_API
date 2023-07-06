const Sequelize = require('sequelize');
const config = require('../../config');

const sequelize = new Sequelize(config.development);

const models = {
  Question: require('./questions')(sequelize, Sequelize),
  Answer: require('./answers')(sequelize, Sequelize)
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
module.exports = models;