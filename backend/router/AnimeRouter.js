'use stict'

/* 
 * initialization  express
 * require book controller
 * main endpoint
 * module export class
*/

const express = require('express');
const AnimeRouter = express.Router();

// controller
// const { AnimeController } = require('../controller/AnimeController');

// endpoint : all anime
// bookRouter.get('/', AnimeController.FindAllAnime);

// endpoint : book by id
// bookRouter.get('/:id', AnimeController.FindAnimeById);

// module export
module.exports = { AnimeRouter };