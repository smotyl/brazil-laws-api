const Sequelize = require('sequelize');

class PublicEntity extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        location: Sequelize.STRING,
        website_url: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = PublicEntity;