'use strict';

/**
 * dotenv init
 * Express Init
 * Setting Port
 * Cors Init
 * Dotenv Init
 * Body Parser / Express Parsing (form parsing)
 */

// Initialization dotenv
require('dotenv').config();

// Initialization Libraries
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const {router} = require('./router/router');

// port
const port = process.env.PORT || 3000;

// Cors Option Origin
let originOptionCors = {
  origin: `http://localhost:${port}`,
};

// Port Connection
app.listen(port, () => `Port Terkoneksi on ${port}`)