import 'reflect-metadata'
import express,{response} from 'express'
import AddressController from '../controller/AddressController'
import extractJWT from '../middleware/extractJWT'


const router = express.Router()

//address table
router.get('/get-address',extractJWT, AddressController.getAddress)

//address table
router.post('/create-address', AddressController.createAddress)

// Update a address
router.put('/update-address', AddressController.updateAddress)

router.delete('/delect-address', AddressController.delectAddress)



export = router