import express from 'express';
import * as controllers from "../controllers/email-controllers.js";
import * as userControllers from "../controllers/user-controllers.js"

const emailRouter = express.Router();
const userRouter = express.Router();

emailRouter.post('/', controllers.addEmailController); // the route where a new email is added to the list of emails
emailRouter.get('/', controllers.getAllEmails)

userRouter.post('/', userControllers.addUserController); // the route where a new user is added to the list of users
userRouter.get('/', userControllers.getAllUsers)
userRouter.post('/login', userControllers.loginUser)

userRouter.get(
    '/api/authenticate',
    userControllers.authenticateUser, // Authenticate user
    userControllers.authoriseUser('admin'), // Authorize user (requires 'admin' role)
    (req, res) => {
      // Route handler logic for /api/authenticate
      res.status(200).json({ message: 'Authenticated and authorised successfully' });
    }
  );


export { emailRouter };
export { userRouter };