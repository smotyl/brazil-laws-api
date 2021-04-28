const express = require('express');
const { lawProjectRoutes } = require('./routes/lawProject.routes');

// import './database';

const app = express();

app.use(express.json());
app.use('/law-projects', lawProjectRoutes);

app.listen(3000);