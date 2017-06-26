# Angular and Acquia Reservoir Tutorial

This sample code was built to demonstrate the connection between an Angular frontend app and a Drupal backend.

Angular was built using [Angular CLI](https://github.com/angular/angular-cli) and follows along with the [Tour of Heroes Tutorial](https://angular.io/tutorial). Angular CLI was selected for compatibility with OAuth authentication used by Acquia Reservoir.

[Acquia Reservoir](https://github.com/acquia/reservoir) is a headless Drupal profile meant to conform to the [JSON API](http://jsonapi.org/) standard and be easy for non-Drupal developers to use.

The companion repository [Well](https://github.com/damontgomery/well) is a Drupal project built on Acquia Reservoir, Acquia BLT, and Drupal VM. This combination of tools provides an easy way to install a VM based headless Drupal site that can connect to the Angular app.

If you follow along with the Tour of Heroes Angular tutorial, you will create an application that uses mock services to retrieve and store data. At the end of that tutorial, you might want to connect to a real system. This project hopefully helps with that.

From the end of the tutorial, the next steps were to add an OAuth library, angular-oauth2-oidc. Since Angular CLI supports this library while Angular Quickstart and System JS do not easily. Angular CLI also provides a command line tool for generating scaffolding. See below. I would recommend using this scaffolding tool when following along with the tutorial. This will store files using the Angular CLI best practices.

As a component based system, most of the changes were contained to the `hero.service.ts` which connected previously to the mock service.

## Development server

Run `ng serve --port 3000` or `npm start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
