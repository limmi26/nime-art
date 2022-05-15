'use stict'

/* 
 * initialization  express
*/

const express = require('express');
const router = express.Router();

// controller
const { Controller } = require('../controller/Controller');

// anime controller
const { AnimeRouter } = require('./AnimeRouter');

// endpoint : home
router.get('/', Controller.Homepage);

// endpoint : anime
router.use('/anime', AnimeRouter);


// module export
module.exports = { router };