const PublicEntity = require('../models/PublicEntity');

class PublicEntityController {
  async get(req, res) {
    const publicEntities = await PublicEntity.findAll();
    res.status(201).send({ error: null, data: { items: publicEntities } });
  }
}

module.exports = new PublicEntityController();