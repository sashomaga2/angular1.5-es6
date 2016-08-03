import angular from 'angular';
import Hero from './hero/hero';
import FList from './flist/flist';

let commonModule = angular.module('app.common', [
  //Navbar,
  FList
])
  
.name;

export default commonModule;
