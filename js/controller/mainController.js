/**
@name mainController.js
@description main page controller
@version 1.0
@date 09/06/2017
@author Vicky Madan Sundesha
*/

//Angular code
(function (){
	angular.module('melonomicsApp', ['ngRoute'])

	.controller("mainController", ['$scope', '$window','$filter', '$http',function ($scope, $window, $filter, $http){
    //$scope.userAction=0;
    //console.log($scope.userAction);
	}])


	.config(function($routeProvider, $locationProvider ){
		//$locationProvider.html5Mode(true);
		$routeProvider
		.when("/projects" ,{
			templateUrl : "view/template/projects-page.html",
		})
		.when("/bio" ,{
			templateUrl : "view/template/bio-page.html",
		})
		.when("/cv" ,{
			templateUrl : "view/template/cv-page.html"
		})
		.otherwise("/" ,{
			templateUrl : "view/template/home-page.html"
		})
	})

})();
