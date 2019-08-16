const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

// const recipeRouter = require('./recipes/recipe-router.js');

const server = express();

server.use(morgan('dev'));
server.use(express.json());
// server.use(`/api/recipes`, recipeRouter);
server.use(helmet());

server.get('/', (request, response) => {
  response.send(`
    <h1>NodeDB IV Challenge</h1>
    <p>Please see the <a href='https://github.com/ericlugo/node-db4-challenge'>README</a> for more information on where to go!</p>
  `);
});

server.get('/api', (request, response) => {
  response.send(`
    <h1>Looking for API Information?</h1>
    <p>Please see the <a href='https://github.com/ericlugo/node-db4-challenge'>README</a> for more information on where to go!</p>
  `);
});

module.exports = server;
