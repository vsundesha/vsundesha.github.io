// jQuery code
$(document).ready(function () {

});

(function(){
	var app = angular.module('app', ['ui.bootstrap']);



	/**
	@name center
	@description bio and woek
	@version 1.0
	@date 07/06/2017
	@author Vicky Sundesha
	*/
	app.directive("center", function (){
		return {
			restrict: 'E',
			templateUrl:"view/template/center.html",
			controller:function(){

			},
			controllerAs: 'center'
		};
	});

  /**
	@name bottom
	@description contact info
	@version 1.0
	@date 07/06/2017
	@author Vicky Sundesha
	*/
	app.directive("bottom", function (){
		return {
			restrict: 'E',
			templateUrl:"view/template/bottom.html",
			controller:function(){

			},
			controllerAs: 'bottom'
		};
	});

	/**
	@name top
	@description top
	@version 1.0
	@date 07/06/2017
	@author Vicky Sundesha
	*/
	app.directive("top", function (){
		return {
			restrict: 'E',
			templateUrl:"view/template/top.html",
			controller:function(){

			},
			controllerAs: 'top'
		};
	});


})();
