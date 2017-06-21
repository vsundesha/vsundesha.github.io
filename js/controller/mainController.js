/**
@name mainController.js
@description main page controller
@version 1.0
@date 09/06/2017
@author Vicky Madan Sundesha
*/

//Angular code
(function (){
	angular.module('app')
	.controller("mainController", ['$scope', '$window','$filter',function ($scope, $window, $filter){
    $scope.userAction=0;
		console.log($scope.userAction);
	}])


})();
