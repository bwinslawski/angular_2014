var APP = angular.module('APP', []);
var dane;
APP.ApplicationCtrl = function ($scope) {
 $scope.cities = new Array();
	var x = 0;
	$.getJSON( "data.json", function(data) {
		$scope.$apply(function(){
		dane=data['vid'];
        $scope.cities = data['vid'];
        });
	})
};

// http://mrzepinski.pl/angularjs-5-ng-repeat.html  <- filtry