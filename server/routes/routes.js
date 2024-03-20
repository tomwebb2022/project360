import express from 'express';
import * as controllers from "../controllers/email-controllers.js";



const emailRouter = express.Router();

emailRouter.post('/', controllers.addEmailController); // the route where a new email is added to the list of emails
emailRouter.get('/', controllers.getAllEmails)
export { emailRouter };