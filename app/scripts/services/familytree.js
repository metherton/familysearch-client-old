'use strict';

angular.module('familysearchClientApp')
    .constant("baseURL","http://localhost:8080/")

    .factory('familyTreeFactory', ['$resource', 'baseURL', function($resource,baseURL) {

        return $resource(baseURL+"familyTree",null);

    }]);
