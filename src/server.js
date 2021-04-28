const express = require('express');
const { publicEntityRoutes } = require('./routes/publicEntity.routes');

require('./database');

const app = express();

app.use(express.json());
app.use('/public-entities', publicEntityRoutes);

app.listen(3000);