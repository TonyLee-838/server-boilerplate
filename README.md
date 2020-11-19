# Server Boilerplate

## Description

This is a server-side code boilerplate of web application using **Javascript** and **Node.js** .  
Implemented with:

- Express
- Mongodb/mongoose (Database)

## Functionality

- User Register/Login
- Route protection(Authorization)

## Authentication

This app allows user to register/login by calling corresponding api endpoint.

### Register

1. Send **POST** request to `/register` endpoint.
2. User information should be passed in data section of the http request with the following structure:
   ```json
   data:{
       "username":"",
       "password":"",
       "email":""
   }
   ```
3. Data Shape:
   - User
     - type: `String`
     - length: 3 - 50
   - Password
     - type: `String`
     - length: 6 - 1025
   - Email
     - type: `String(valid email address)`
     - length : 6 - 255
     - Each of email in the database should be **unique**.
4. Response
   When data processing and validation completes, a _response_ is send to the client with a _json web token_.

### User Authentication

1. Send **POST** request to `/auth` endpoint.
2. User information should be passed in data section of the http request with the following structure:
   ```json
   data:{
       "password":"",
       "email":""
   }
   ```
3.
