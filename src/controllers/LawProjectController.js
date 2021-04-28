class LawProjectController {
  async get(req, res) {
    res.status(201).send({ error: null, data: { sandro: 'sandro' } });
  }
}

module.exports = LawProjectController;