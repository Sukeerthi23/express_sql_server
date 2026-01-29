import { createUserController } from "../Controller/userController.js";

import express from 'express'
 
const userRoute = express.Router();//post put get delete

userRoute.post('/signup', createUserController);

export default userRoute
