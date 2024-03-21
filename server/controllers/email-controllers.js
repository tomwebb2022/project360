import EmailModel from "../models/models.js";

export async function addEmailController(req, res) {
    const newEmail = req.body;
    try {
        const emailData = await EmailModel.create(newEmail);
        res.status(201).json({ status: "success", data: emailData });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}

export async function getAllEmails(req, res) {
    try {
        const emailData = await EmailModel.find();
        res.status(200).json(emailData);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}