
import angular from 'angular';

const moduleName='data.services';

const HTTP = new WeakMap();

class FlickDataService
{
    constructor($http)
    {
        HTTP.set(this, $http);
    }

    getData(){
        return 'Moia hui si e moi!';
        //return HTTP.get(this).get('/api/activeBooks').then(result => result.data );
    }

    static dataFactory($http){
        return new FlickDataService($http);
    }
}

FlickDataService.dataFactory.$inject = ['$http'];

angular.module(moduleName, [])
    .factory('flickDataService', FlickDataService.dataFactory);

export default moduleName;