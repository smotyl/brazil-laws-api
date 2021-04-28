const { Router } = require('express');
const LawProjectController = require('../controllers/LawProjectController');

const lawProjectRoutes = Router();

lawProjectRoutes.get('/', LawProjectController.get)

lawProjectRoutes.post('/', (request, response) => {
  const { name, description, uri, publicEntity } = request.body;
  
  return response.status(201).send({ error: null, data: { name, description, uri, publicEntity } });
})

lawProjectRoutes.delete('/', (request, response) => {
  return response.status(201).send({ error: null, data: { sandro: 'sandro' } });
})

module.exports = { lawProjectRoutes };