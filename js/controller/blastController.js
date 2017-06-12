/**
@name ReviewsController.js
@description This is the javascript file that contains the functions and angular controllers used by the ReviewsController
@version 1.0
@date 15/05/2017
@author Vicky Madan Sundesha
*/

(function (){
    angular.module('melonomicsApp')

    .controller("blastController", ['$scope', '$window','$filter', '$http',function ($scope, $window, $filter, $http){

        $scope.blastObj = new Blast();

        this.loadInitData=function(){
            $scope.blastObj.setSequence("");
        }

        this.blastQuery= function(){

            var data = JSON.stringify($scope.blastObj);
            console.log(data);

            $http.post("/blast", data).success(function(data, status) {
                console.log(data);
                console.log('Data posted successfully');
            })
        }

    }])

})();
