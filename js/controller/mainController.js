/**
@name mainController.js
@description main page controller
@version 1.0
@date 09/06/2017
@author Vicky Madan Sundesha
*/

//Angular code
(function (){
	angular.module('app', ['ngRoute'])

	.controller("mainController", ['$scope', '$window','$filter', '$http',function ($scope, $window, $filter, $http){
    $scope.userAction=1;
    console.log($scope.userAction);
	}])


})();
