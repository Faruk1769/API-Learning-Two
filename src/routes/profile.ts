import 'reflect-metadata'
import express, { response } from 'express'
import ProfileController from '../controller/ProfileController'
import extractJWT from '../middleware/extractJWT'
const router = express.Router()

router.post('/create-profile', ProfileController.createProfile)

router.get('/get-profile',extractJWT, ProfileController.getProfile)

router.put('/update-profile', ProfileController.updateProfile)

router.delete('/delect-profile', ProfileController.delectProfile)

export = router