const Sequelize = require('sequelize');

class PublicEntity extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        initial: Sequelize.STRING,
        state: Sequelize.STRING,
        uri: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = PublicEntity;