const LawProject = require('../models/LawProject');

class LawProjectController {
  async get(req, res) {
    const lawProjects = await LawProject.findAll();
    res.status(201).send({ error: null, data: { items: lawProjects } });
  }

  async post(req, res){
    const { title, uri, description, public_entity_id } = req.body;

    const lawProject = await LawProject.create({
      title,
      uri,
      description,
      public_entity_id,
    });

    return res.json(lawProject);
  }
}

module.exports = new LawProjectController();