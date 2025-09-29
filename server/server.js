const express = require('express');
const app = express();

app.use(express.static('build'));  // serve the bundled React files

module.exports = app;
