'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('familysearchClientApp'));

  var MainCtrl,
    scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, familyTreeFactory) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET("http://localhost:8080/familyTree").respond(
        {
          "links": ["firstlink", "secondlink"]
        }
    );

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      familyTreeFactory: familyTreeFactory
      // place here mocked dependencies
    });
    $httpBackend.flush();
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
    console.log(MainCtrl);
    expect(MainCtrl.familyTree.links.length).toBe(2);
  });
});
