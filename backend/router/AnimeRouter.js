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
const { AnimeController } = require('../controller/AnimeController');

// endpoint : all anime
AnimeRouter.get('/', AnimeController.FindAllAnime);

// endpoint : anime by id
// AnimeRouter.get('/:id', AnimeController.FindAnimeById);

// module export
module.exports = { AnimeRouter };