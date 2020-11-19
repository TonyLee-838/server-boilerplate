# Server Boilerplate

## Description

This is a server-side code boilerplate of web application using **Javascript** and **Node.js** .  

App is Implemented with:
- Express
- Mongodb/mongoose (Database)

## Functionality

- User Register/Login
- Route protection(Authorization)

## Authentication

This app allows user to register/login by calling corresponding api endpoint.

### User Object Model
  - User
     - type: `String`
     - length: 3 - 50
   - Password
     - type: `String`
     - length: 6 - 1025
   - Email
     - type: `String` (valid email address)
     - length : 6 - 255
     - Each of email in the database should be **unique**.

### Register

1. Send **POST** request to `/register` endpoint.
2. User information should be passed in data section of the http request with the following structure:
   ```json
   data:{
       "username":"__name__",
       "password":"__password__",
       "email":"__email@mail.com__"
   }
   ```
 
3. Response
   When data processing and validation completes, it sends a response with _name_ and _email_ message as well as token header.
4. Error
   - ValidationError(status:**400**): If user sends invalid data, app will response with an Error.
   
### User Authentication

1. Send **POST** request to `/auth` endpoint.
2. User information should be passed in data section of the http request with the following structure:
   ```json
   data:{
       "password":"",
       "email":""
   }
   ```
3. Response
   When login is successful, it sends authentication token in response's header and user object.
4. Error
   - AuthenticationError(status:**401**): Occurs when incorrect email-password combination is passed.
   
### Authentication Token
When authentication is successful, a Jsonwebtoken is generated and sent to the client.
The payload of token uses users unique *id* and *authorization level*.

