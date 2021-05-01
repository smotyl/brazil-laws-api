const Sequelize = require('sequelize');

class PublicEntity extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        initials: Sequelize.STRING,
        description: Sequelize.STRING,
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