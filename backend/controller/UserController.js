'use strict'
/*
 * class declaration
 * write static method
 * add model to controller
 * module export class
*/ 

// const {User} = require('../model/User');

class UserController {

    static FindAllUser(req, res) {
        res.send('ini user controller');
    }

}

module.exports = {
    UserController,
};