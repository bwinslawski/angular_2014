var APP = angular.module('APP', []);
APP.ApplicationCtrl = function ($scope) {
	$.getJSON( "data.json", function(data) {
					$scope.$apply(function(){
					$scope.friends = data['vid'];
					});
				})
				$scope.predicate = '-price';
	
  
};


