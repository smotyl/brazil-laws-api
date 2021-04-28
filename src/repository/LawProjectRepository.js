const LawProjectModel = require('../models/LawProject');

class LawProjectRepository {
  constructor() {
    this.repository = LawProjectModel;
  }

  getAll() {
    this.repository.findAll();
  }

  getById() {}
  create() {}
  delete() {}
}

module.exports = LawProjectRepository;