import express from 'express'
import * as controllers from './controllers'

const router = express.Router()

/* POST /user - Create new user */
/* GET /user - Retrieve all users */
/* GET /user/:id - Retrieve a user */
/* PATCH /user/:id - Modify an existing user */
/* DELETE /user/:id - Remove a user */

/* create */
router.post('/', controllers.createUser)

/* read/all */
router.get('/', controllers.getAllUsers)

/* read/single */
router.get('/:id', controllers.getUser)

/* update/partial */
router.patch('/:id', controllers.editUser)

/* delete */
router.delete('/:id', controllers.deleteUser)

export default router
