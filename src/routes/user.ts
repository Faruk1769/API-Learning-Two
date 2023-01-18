import 'reflect-metadata'
import express, { response } from 'express'
import UserController from '../controller/UserController'

const router = express.Router()

//User table
router.get('/get-user', UserController.getUser)

//user table
router.post('/create-user', UserController.createUser)

// Update a user
router.put('/update-user', UserController.updateUser)

// delect a user
router.delete('/delect-user', UserController.delectUser)

// login a user
router.post('/login', UserController.login)



export = router