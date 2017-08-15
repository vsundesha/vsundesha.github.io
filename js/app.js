// jQuery code
$(document).ready(function () {

});

(function(){
	var app = angular.module('app', ['ui.bootstrap']);
	/**
	  @name skyep directive
	  @description contact info
	  @version 1.0
	  @date 07/06/2017
	  @author Vicky Sundesha
	  */
	app.directive("skypeUi", function() {
		return {
			restrict: "E",
			template: "<div></div>",
			replace: true,
			scope: {
				participants: "="
			},
			link: function(scope, element, attrs){
				Skype.ui({
					"name": "chat",
					"element": attrs.id,
					"participants": scope.participants,
					"imageSize": 32
				});
			}
		};
	});


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
