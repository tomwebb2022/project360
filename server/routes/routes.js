const express = require('express');

const emailRouter = express.Router();

emailRouter.post('/emails', controllers.addEmailController); // the route where a new email is added to the list of emails

export { emailRouter };