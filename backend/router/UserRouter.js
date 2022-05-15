'use stict'

/* 
 * initialization  express
 * require book controller
 * main endpoint
 * module export class
*/

const express = require('express');
const UserRouter = express.Router();

// controller
const { UserController } = require('../controller/UserController');

// endpoint : all user
UserRouter.get('/', UserController.FindAllUser);

// endpoint : user by id
// userRouter.get('/:id', UserController.FindUserById);

// module export
module.exports = { UserRouter };