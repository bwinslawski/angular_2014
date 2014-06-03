

var APP = angular.module('APP', []);
var result = new Array();
var x;
APP.ApplicationCtrl = function ($scope,$http) {

	$.getJSON( "data.json", function(data) {
					$scope.$apply(function(){
					$scope.friends = data['vid'];
					
					});
				})
				$scope.predicate = '-price';
	$scope.deleteItem = function (item) {
	
			 $.getJSON( "data.json", function(data) {
					console.log(data['vid'] + " "+data['vid'].length);
					for (var i = 0; i < data['vid'].length; i++) {
					console.log(data['vid'][i]);
					if(data['vid'][i].id==item){
					console.log();
						var x = new Object(data['vid'][i]);
						Chat.send(x);
					}	
					}
					//result =result + "}";
					//Chat.send(result);
				});
			
		}
		
};


