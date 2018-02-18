# WorkflowFilter
Its a micro service using Node and HAPiJS to filter JSON request.

Service can be accessed using url [https://powerful-wave-91194.herokuapp.com](https://powerful-wave-91194.herokuapp.com) 

Note: it may some time to load the url , since its a freeware version of heroku.

## Requirement
Requirement details is available at [https://github.com/Hometrack/codetest] (https://github.com/Hometrack/codetest)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites
* NodeJS 9.0.0+
* HapiJS 16.2.0

## To Run Hapi server locally( once code is downloaded), use below commands:

```
npm install
```

```
npm start
```

## Running the tests

This project uses mocha to for testing. Command to run test and check coverage are as:

```
npm test
```
```
npm run test:coverage
```

# hapi-swagger

hapi-swagger package is used here and it can be used for testing Api endpoints.

More details related to hapi-swagger can be found at [https://github.com/glennjones/hapi-swagger](https://github.com/glennjones/hapi-swagger)
## Deployment, Getting Started on Heroku with Node.js

This project is configured to be deployed to heroku and details can be found [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

To deploy first login to your heroku account by running the command below and following the prompts

``` 
heroku login 
```
Then create a Heroku app for the project

```
heroku create
```

This will add the heroku remote configuration to your local git repository, you can deploy by pushing to this remote

```
git push heroku master
```

## This project is Built With: 
[HapiJS](https://hapijs.com/api/16.2.0) - The web framework used
## License
This project is licensed under the Apache License - see the LICENSE file for details