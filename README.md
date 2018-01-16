This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

![Logo of the project](cakes.png)

# CodeTest: Cake App Using React, external API and ReactRouter
> A short code test for a front-end developer role
* User can view a list of all cakes
* User can click on a list item and see details on a separate view
* User can add a new cake to the API using a form

### Features
* Fetch requests to API, input validation through HTML5, default images and filter for faulty entries in original API
* react-router-bootstrap library to use IndexLinkContainer with Links inside React-Bootstrap Navbar Component

## Getting started

npm init
npm install
npm start

This will launch your localhost - app is on http://localhost:3000/cakes

## Developing

### Built With
React, React-Router v4, React-Bootstrap, React-Router-Bootstrap

## Lighthouse report

PWA 55% (service worker not registered), Accessibility 97%, Best Practices 81%

* Performance could be improved by using Redux rather than a second Fetch request
* http requests could be replaced by https if access to API was permitted
