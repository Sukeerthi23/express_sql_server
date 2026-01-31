import { connectDB } from "./Db/db.js";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from "./Route/userRoutes.js";
import authUserRoute from "./Route/authUserRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors())
connectDB() 
app.use('/api/user', userRoute);
app.use('/api/user', authUserRoute);
//https://localhost:5000/api/user/signup
app.listen(PORT, () => {
    console.log(`your server is running in ${PORT}`);
})
