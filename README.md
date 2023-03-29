# Description
I developed a REST api using Nodejs & Expressjs for a library application. It is fully authenticated that users can login or sign up in order to use the application and url end points are secured using `jsonwebtoken` that will avoid unauthorized access to the data.
# Before Run
 1. Clone or fork the application,
 2. Go to root directory,
 3. Run `npm install` to install dependencies,
 4. Create `.env` file in the root directory and make sure to have the following content:
  * `DB_CONNECTION=<your-db-connection-link>` => This will connect the api to Database, in my case I used `MongoDB Cloud` link,
  * `JWT_SECRET=<your-secret>` => This will be used for signing or verifying the `auth-token`
# How to Test
 1. Run `nodemon` in the root directory,
 2. Go to your api testing application, in my case I use `Postman`,
 3. Create a user and login the application using user credentials,
    1. SignUp: `localhost:3000/api/v1/auth/signup`
    2. Login: `localhost:3000/api/v1/auth/login`
 4. You will get a `token` when you login,
 5. In order to access other url endpoints you must use that `token` in the request headers as follows:
    1. `Key: auth-token`, `Value: <token>`

# Tech Features
  1. `@hapi/joi` => To validate the user data before database interaction,
  2. `bcryptjs` => To crypt the user password before saving to database,
  3. `jsonwebtoken` => To secure the endpoints,
  4. `Postman` => To test the api
