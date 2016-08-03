import angular from 'angular';
import Hero from './hero/hero';
import Flist from './flist/flist';

let commonModule = angular.module('app.common', [
  //Navbar,
  Flist
])
  
.name;

export default commonModule;
