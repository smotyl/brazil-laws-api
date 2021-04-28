const { Router } = require('express');

const lawProjectRoutes = Router();

lawProjectRoutes.get('/', (request, response) => {
  return response.status(201).send({ error: null, data: { sandro: 'sandro' } });
})

lawProjectRoutes.post('/', (request, response) => {
  const { name, description, uri, publicEntity } = request.body;
  
  return response.status(201).send({ error: null, data: { name, description, uri, publicEntity } });
})

lawProjectRoutes.delete('/', (request, response) => {
  return response.status(201).send({ error: null, data: { sandro: 'sandro' } });
})

module.exports = { lawProjectRoutes };