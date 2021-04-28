const Sequelize = require('sequelize');

class LawProject extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        uri: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.PublicEntity, { foreignKey: 'public_entity_id', as: 'public_entity' });
  }
}

module.exports = LawProject;