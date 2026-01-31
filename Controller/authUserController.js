import { hashPassword, passwordCheck } from "../utils/hash.js";
import { createToken } from "../utils/token.js";

import AuthUserModel from '../Model/authUserModel.js'

export const signupUserController = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const checkEmail = await AuthUserModel.userLoginModel(email);
        if (checkEmail) {
            return res.status(400).json({ message: "email already exists" });
        }
        const newPassword = await hashPassword(password);
        const id = await AuthUserModel.userSignupModel({ name, email, password: newPassword, role: role || "user" });
        res.status(201).json({ message: "user has been created", userId: id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AuthUserModel.userLoginModel(email);
        if (!user) return res.status(400).json({ message: "invalid credentials" });

        const isMatch = await passwordCheck(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "wrong password" });

        const token = await createToken({ id: user.id || user.ID || user.userId });
        const { password: pw, ...userSafe } = user;
        res.json({ message: "login successful", token, user: userSafe });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



