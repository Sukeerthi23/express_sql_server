import express from 'express'

import { protect } from '../middleware/protect.js';
import { isAdmin } from '../middleware/admin.js';
import { loginUserController, signupUserController } from '../Controller/authUserController.js';        

const authUserRoute = express.Router();

//http://localhost:5000/api/auth/authlogin

authUserRoute.post('/authlogin', loginUserController);
authUserRoute.post('/authsign', signupUserController);

authUserRoute.get('/profile', protect, (req, res) => {
    res.json({ message: "protected profile", user: req.user });
})
authUserRoute.get('/admin', protect, isAdmin, (req, res) => {
    res.json({ message: "welcome admin user",
    user: req.user
    })
})

export default authUserRoute

