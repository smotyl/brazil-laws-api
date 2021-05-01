const { Router } = require('express');
const PublicEntityController = require('../controllers/PublicEntityController');

const publicEntityRoutes = Router();

publicEntityRoutes.get('/', PublicEntityController.get);
publicEntityRoutes.post('/', PublicEntityController.post)

module.exports = { publicEntityRoutes };