// jQuery code
$(document).ready(function () {

});

(function(){
	var app = angular.module('app', ['ui.bootstrap', 'angularUtils.directives.dirPagination', 'ngAnimate']);



	/**
	@name bio
	@description bio
	@version 1.0
	@date 07/06/2017
	@author Vicky Sundesha
	*/
	app.directive("mainPage", function (){
		return {
			restrict: 'E',
			templateUrl:"view/template/main-page.html",
			controller:function(){

			},
			controllerAs: 'mainPage'
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


})();
