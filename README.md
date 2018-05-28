# Mobility ETA

An interface to retreive and display ETA information from MARTA Mobility in a clear way. This is targeted towards Mobility customers with cognitive disabilities but also good for anybody who wants a simpler quick update.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [ParcelJS](https://github.com/parcel-bundler/parcel) For bundling and dev server with hot module replacement. Can be installed globally:

```
npm install -g parcel-bundler
```

But it is also included as a dependency in this project.

### Installing

Clone this repo and run

```
npn install
```

For devlopment server:
```
parcel index.html
```

Once build is complete, navigate to "http://localhost:1234/". You should see a login in screen and be able to log in with username and password 'test':

![Mobility ETA Login Process](https://media.giphy.com/media/1zRdhwH9CKNjzeHdH0/giphy.gif)


## Running the tests

This project uses [Cypress](https://www.cypress.io/) for testing. Run 
```
npm test
```
or 
```
npx cypress open
```
to open Cypress, then run the test "app_spec.js" which will verify that the homepage loads, test user is able to log in, and the trip information is displayed. The test data is stored locally in "helpers" and no longer comes from scrape.php.

Cypress can also run headless tests, with this command:
```
./node_modules/.bin/cypress run
```
This will run all the tests in the command line.

## Continuous Deployment

The project is live at [https://vigilant-saha-304915.netlify.com/](https://vigilant-saha-304915.netlify.com/) and is **updated every time there is a change on the master branch**.

## Building for Production

If you need to create a production build, run

```
parcel build index.html
```
This will update the /dist folder with minified files and assets. This is only needed if you want to deploy somewhere other than Netlify, since a new Netlify build is created automatically when changes are pushed to Master.
