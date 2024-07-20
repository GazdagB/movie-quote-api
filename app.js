const express = require('express');
const quoteRouter = require('./routes/quoteRoutes');

const app = express();

app.use(express.json());

app.use('/quotes', quoteRouter);

module.exports = app;