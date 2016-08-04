import template from './flist.html';
import controller from './flist.controller';
import './flist.styl';

let fListComponent = {
    restrict: 'E',
    bindings: {items: '<'},
    template,
    controller
};

export default fListComponent;
