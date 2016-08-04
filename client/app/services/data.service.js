
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
        return HTTP.get(this).jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json&&jsoncallback=JSON_CALLBACK')
            .then(function(result) { return result.data.items})
            .catch(function(err){ console.error(err); });
    }

    static dataFactory($http){
        return new FlickDataService($http);
    }
}

FlickDataService.dataFactory.$inject = ['$http'];

angular.module(moduleName, [])
    .factory('flickDataService', FlickDataService.dataFactory);

export default moduleName;
