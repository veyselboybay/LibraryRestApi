# Description
I developed a REST api using Nodejs & Expressjs for a library application. It is fully authenticated that users can login or sign up in order to use the application and url end points are secured using `jsonwebtoken` that will avoid unauthorized access to the data.
# How to Install $ Run the application
 1. Clone or fork the application,
 2. Run `npm install` to install dependencies,
 3. Create `.env` file in the root directory and make sure to have the following content:
  * `DB_CONNECTION=<your-db-connection-link>` => This will connect the api to Database, in my case I used `MongoDB Cloud` link,
  * `JWT_SECRET=<your-secret>` => This will be used to signing or verifying the `auth-token`
 4. Run `nodemon` to start the application.
