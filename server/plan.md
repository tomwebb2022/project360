We need:
- To store emails in a database, so that when the user enters their email in the form, we can have a list of all subscribers
- A login system, so that only the admin can access the admin panel
- For now, the admin panel will only have a list of all emails
- To save the videos in a database, to display on the website

Models:
- Users
    - username: string
    - password: string
- Emails
    - name: string
    - email: string

Routes:
- POST /emails - to add an email to the database when the user enters their email in the form
- POST /login - to login the admin
- PATCH /users/:id - to update a user
- DELETE /users/:id - to delete a user
- GET /emails - to get all emails
- PATCH /emails/:id - to update an email
- DELETE /emails/:id - to delete an email

Controllers:
- A controller function that adds an email to the database
- A controller function that logs in the admin
- A controller function that updates a user
- A controller function that deletes a user
- A controller function that gets all emails
- A controller function that updates an email
- A controller function that deletes an email