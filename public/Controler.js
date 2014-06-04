

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
		
		$scope.showV= function (item) {
		var opis;
		console.log($scope.friends.length);
		for (var i = 0; i < $scope.friends.length; i++) {
					console.log($scope.friends[i]);
					if($scope.friends[i].id==item){
					$( "#opisss" ).remove();
					
					$( "#demo" ).append( "<div id=\"opisss\"><strong id\"opiss\">Rok produkcji: "+$scope.friends[i].year+ "</strong> <br/><br/><p>" +$scope.friends[i].opis+"</p></div>" );
					}	
					}
		
		
		//$( "#demo" ).append( "<strong>Rok produkcji: "+opis+"</strong>" );
		
		}
		
};


