const { Router } = require('express');
const LawProjectController = require('../controllers/LawProjectController');

const lawProjectRoutes = Router();

lawProjectRoutes.get('/', LawProjectController.get);
lawProjectRoutes.post('/', LawProjectController.post);

module.exports = { lawProjectRoutes };