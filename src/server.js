const express = require('express');
const { publicEntityRoutes } = require('./routes/publicEntity.routes');
const { lawProjectRoutes } = require('./routes/lawProject.routes');

require('./database');

const app = express();

app.use(express.json());
app.use('/public-entities', publicEntityRoutes);
app.use('/law-projects', lawProjectRoutes);

app.listen(3000);