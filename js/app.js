// jQuery code
$(document).ready(function () {

});

(function(){
	var app = angular.module('app', ['ui.bootstrap', 'angularUtils.directives.dirPagination']);

	/**
	@name home page
	@description homepage.
	@version 1.0
	@date 07/06/2017
	@author Vicky Sundesha
	*/
	app.directive("homePage", function (){
		return {
			restrict: 'E',
			templateUrl:"view/template/home-page.html",
			controller:function(){

			},
			controllerAs: 'homePage'
		};
	});

  /**
	@name project
	@description project
	@version 1.0
	@date 07/06/2017
	@author Vicky Sundesha
	*/
	app.directive("projectsPage", function (){
		return {
			restrict: 'E',
			templateUrl:"view/template/projects-page.html",
			controller:function(){

			},
			controllerAs: 'projectsPage'
		};
	});

	/**
	@name bio
	@description bio
	@version 1.0
	@date 07/06/2017
	@author Vicky Sundesha
	*/
	app.directive("bioPage", function (){
		return {
			restrict: 'E',
			templateUrl:"view/template/bio-page.html",
			controller:function(){

			},
			controllerAs: 'bioPage'
		};
	});

	/**
	@name cv
	@description cv
	@version 1.0
	@date 07/06/2017
	@author Vicky Sundesha
	*/
	app.directive("cvPage", function (){
		return {
			restrict: 'E',
			templateUrl:"view/template/cv-page.html",
			controller:function(){

			},
			controllerAs: 'cvPage'
		};
	});


})();
