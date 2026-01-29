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

export const getAllUsersController = async (req, res) => {
    try{
        const data = await UserModel.getAllUsers();

        res.json(data)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const updateUserPasswordController = async (req, res) => {
    try {
        const { password } = req.body;
        const updatePassword = await UserModel.updateUserPasswordModel(req.params.id, {
            password});
            if(!updatePassword){
                res.json({message:"user not found"})
            }
            else{
                res.json({message:"password has been updated"})
            }
        }catch (err){
            res.status(500).json({ error: err.message })
        }
}
export const deleteUserController = async (req, res) => {
     try {
        const delte = await UserModel.deleteUserModel(req.params.id);
            if(!delte){
                res.json({message:"user not found"})
            }
            else{
                res.json({message:"user has been removed from ur table"})
            }
        }catch (err){
            res.status(500).json({ error: err.message })
        }
    }