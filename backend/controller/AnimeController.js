'use strict'
/*
 * class declaration
 * write static method
 * add model to controller
 * module export class
*/ 

// const {Anime} = require('../model/Anime');

class AnimeController {

    static FindAllAnime(req, res) {
        res.send('ini anime controller');
    }

}

module.exports = {
    AnimeController,
};