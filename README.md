# rent-manager-client

Rent Manager is a rent financing platform that helps renters split their annual rent into monthly payments. For renters to get qualified to use Kwaba as a service, they have to get pre-approved for a rent amount. This pre-approval shows the renter how much they can get from Kwaba towards their rent. Find below how the process works;

# Installation
- Copy the .env.sample to a .env file to acess env variables and modify as appropriate to your development environment
- Install all dependencies by running the command npm install on the server and client
- To start the client and server app using concurrently, you would need to run the command:
```
npm run dev
```

To start the client, run the command
```
npm run client
```
To start the server, run the command 
npm run server-dev

Implemented Features
- Authentication - Signup and Login using Json web token, middlewares for protected routes
- Seeders for populating default roles, accommodation statuses
- Rent Request creation and retrieval
 
# Improvements due to time constraint
- Admin approval of loan requests
- Animations
