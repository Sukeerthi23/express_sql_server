import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

export const createToken = async(payload) => {
    return jwt.sign(payload, process.env.JWT_TOKEN, { 
        expiresIn: process.env.JWT_EXP 
    });
}