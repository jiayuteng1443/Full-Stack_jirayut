angular.module('project', ['ngRoute', 'firebase'])
  
.value('fbURL', 'https://drive.google.com/open?id=1RJZY8t7ikmnjkWFaMxDxGG7Gj0N7cajC')
  
.factory('Projects', function($firebase, fbURL) {
  return $firebase(new Firebase(fbURL)).$asArray();
})
  
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ListCtrl',
      templateUrl:'list.html'
    })
   
    .otherwise({
      redirectTo:'/'
    });
})
  
.controller('ListCtrl', function($scope, Projects) {
  $scope.projects = Projects;
})
  

  
