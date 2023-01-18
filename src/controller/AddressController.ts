import { NextFunction, Request, Response } from "express"
import { isDataView } from "util/types";
import { Address } from './../entity/Address';


const NAMESPACE = 'AddressController'


const getAddress = async (req: Request, res: Response, next: NextFunction) => {

   // const addr= await Address.find()
    const addr= await Address.findOne({
        where :{
            id : 1
        }
    })

    return res.status(201).json({
        status: 'success',
        message: 'User fetched successfully',
        data: addr
    })
}

const createAddress = async (req: Request, res: Response, next: NextFunction) => {
     // Form data
     const { addrsss,phone } = req.body

     // Insert to database
     const addr = Address.create({ addrsss,phone })
     await addr.save()
 
     return res.status(201).json({
         status: 'success',
         message: 'User inserted successfully',
         data: addr
     })
}

const updateAddress = async (req: Request, res: Response, next: NextFunction) => {
    const { id, addrsss } = req.body

    const addr = await Address.findOne({ where: { id: id } });

    addr.addrsss = addrsss || addr.addrsss
   // user.email = email || user.email
    await addr.save()

    if (!addr) {
        return res.status(404).json({
            status: 'success',
            message: 'User not found',
            data: addr
        })
    }

    return res.status(201).json({
        status: 'success',
        message: 'User updated successfully',
        data: addr
    })
}

const delectAddress = async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.body

    //const user = await User.delete(parseInt(id));
    // const user = await User.softRemove([id]);
    await Address.createQueryBuilder()
                .softDelete()
                .where("id = :id", {id: id})
                .execute()
   

    return res.status(201).json({
        status: 'success',
        message: 'User delected successfully',
        data: []
    })

        
}

export default {
    getAddress,
    createAddress,
    updateAddress,
    delectAddress

}