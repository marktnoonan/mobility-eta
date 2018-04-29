# Mobility ETA

An interface to retreive and display ETA information from MARTA Mobility in a clear way. This is targeted towards Mobility customers with cognitive disabilities but also good for anybody who wants a simpler quick update.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [ParcelJS](https://github.com/parcel-bundler/parcel) For bundling and dev server with hot module replacement. Can be installed globally:

```
npm install -g parcel-bundler
```

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

This project will use [Cypress](https://www.cypress.io/) for E2E testing. Run 
```
npm test
```
or 
```
npx cypress open
```
to open Cypress, then run the test "app_spec.js" which will verify that the homepage loads, test user is able to log in, and the trip information is displayed. Note that the test user data is returned from a real network request to a php script running on markthomasnoonan.com, and we might want to mock that result instead.

## Deployment

```
parcel build index.html
```
This will update the /dist folder with minified files and assets.
