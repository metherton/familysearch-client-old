'use strict';

/**
 * @ngdoc function
 * @name familysearchClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the familysearchClientApp
 */
angular.module('familysearchClientApp')
  .controller('MainCtrl', ['familyTreeFactory', function(familyTreeFactory) {

      var vm = this;

      vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      vm.newone = 'yoyouo';
      vm.showFamilyTree = false;

      vm.messageFamilyTree = "Loading...";

    vm.familyTree = familyTreeFactory.get()
        .$promise.then(
            function(response){
                vm.familyTree = response;
                vm.showFamilyTree = true;
            },
            function(response) {
                vm.messageFamilyTree = "Error: "+response.status + " " + response.statusText;
            }
        );

  }]);
