import UserModel from "../Model/userModel.js";

export const createUserController = async (req, res) => {
    try{
        const {name, email, password } = req.body
        const response = await UserModel.createUserModel({ name, email, password });
        res.status(201).json({
            message: "user has been created",
            userId: response
        })  
    } 
    catch (err) {
        res.status(500).json({ message: "invalid data " })
    }
}