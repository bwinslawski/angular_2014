var APP = angular.module('APP', []);
APP.ApplicationCtrl = function ($scope) {
	$.getJSON( "data.json", function(data) {
					$scope.$apply(function(){
					$scope.friends = data['vid'];
					});
				})
				$scope.predicate = '-price';
};


// http://mrzepinski.pl/angularjs-5-ng-repeat.html  <- filtry