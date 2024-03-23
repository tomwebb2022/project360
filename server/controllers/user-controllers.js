import UserModel from "../models/models.js";

export async function addUserController(req, res) {
    const newUser = req.body;
    try {
        const userData = await UserModel.create(newUser);
        res.status(201).json({ status: "success", data: userData });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}

export async function getAllUsers(req, res) {
    try {
        const userData = await UserModel.find();
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}