import angular from 'angular';
import uiRouter from 'angular-ui-router';
import fListComponent from './flist.component';

let fListModule = angular.module('fList', [
    uiRouter, flickDataService
])

    .component('fList', fListComponent)

    .name;

export default fListModule;
