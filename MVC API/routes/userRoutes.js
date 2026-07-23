import express from 'express'
import check from '../middleware/userMiddleware.js'
import {getUser} from '../controllers/userController.js'

const route=express.Router()

route.get('/read',check,getUser)
export default route