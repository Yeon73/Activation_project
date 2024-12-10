const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

module.exports = app;
