const PublicEntity = require('../models/PublicEntity');

class PublicEntityController {
  async get(req, res) {
    const publicEntities = await PublicEntity.findAll();
    res.status(201).send({ error: null, data: { items: publicEntities } });
  }

  async post(req, res){
    const { initials, description, website_url } = req.body;

    const publicEntity = await PublicEntity.create({
      initials,
      description,
      website_url,
    });

    return res.json(publicEntity);
  }
}

module.exports = new PublicEntityController();