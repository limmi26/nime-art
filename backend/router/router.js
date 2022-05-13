'use stict'

/* 
 * initialization  express
*/

const express = require('express');
const router = express.Router();

// controller
// const { Controller } = require('../controller/Contoller');

// anime controller
// const { animeRouter } = require('./AnimeRouter');

// endpoint : home
// router.get('/', Controller.Homepage)

// endpoint : anime
// router.use('/anime', animeRouter);


// module export
module.exports = { router };