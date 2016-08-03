import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import dataService from './services/data.service';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    dataService
  ])
  .config(($locationProvider, $stateProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
      $stateProvider.state('foo', {
          template: '<f-list items="$resolve.items"></f-list>',
          url: '/',
          resolve: {
              items: function(flickDataService) {
                  return flickDataService.getData();
              }
          }
      });

  })

  .component('app', AppComponent);
