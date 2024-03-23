import express from 'express';
import * as controllers from "../controllers/email-controllers.js";

const emailRouter = express.Router();
const userRouter = express.Router();

emailRouter.post('/', controllers.addEmailController); // the route where a new email is added to the list of emails
emailRouter.get('/', controllers.getAllEmails)

userRouter.post('/', controllers.addUserController); // the route where a new user is added to the list of users
userRouter.get('/', controllers.getAllUsers)

export { emailRouter };