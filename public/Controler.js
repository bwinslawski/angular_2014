

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
		console.log("fwegergsrtehgrthggbf");
		for (var i = 0; i < $scope.friends.length; i++) {
					console.log($scope.friends[i]);
					if($scope.friends[i].id==item){
					$( "#opisss" ).remove();
					
					$( "#demo" ).append( "<div id=\"opisss\"><strong id\"opiss\">Rok produkcji: "+$scope.friends[i].year+ "</strong> <br/><br/><p>" +$scope.friends[i].opis+"</p></div>" );
					}	
		}			}
		$scope.editUser = function(item){
		$( ".edit" ).remove();
		
		$( "#lol" ).prepend( " <tr class=\"edit\"><td>mileage<br/><input class=\"mil\" type=\"text\" name=\"fname\" value=\""+item.mileage+ "\"></td>"
		+ "<td>title<br/><input class=\"tit\" type=\"text\" name=\"fname\" value=\""+item.title+ "\"></td>"
		+ "<td>price<br/><input class=\"pri\" type=\"text\" name=\"fname\" value=\""+item.price+ "\"></td>"
		+"<td rowspan=\"2\">description<br/><textarea class=\"des\" rows=\"3\" >"+item.opis+ "</textarea></td>"
		+"</tr>" 
		+" <tr class=\"edit\">"
		+ "<td>ID<br/><input  id=\"idU\" value=\""+item.id+ "\"></td>"
		+"<td>URL<br/><input id=\"imgData\" type=\"text\" name=\"fname\" value=\""+item.imgData+ "\"></td>"
		+ "<td>year<br/><input class=\"year\" type=\"text\" name=\"fname\" value=\""+item.year+ "\"></td>"
		+"</tr>");
		} 
		$scope.cancelUser = function () {
		$( ".edit" ).remove();
		
			 
			
		}
		
			$scope.saveUser = function () {
		
		}
		$scope.additem = function () {
		Chat.send("add");
		}
		
		//$( "#demo" ).append( "<strong>Rok produkcji: "+opis+"</strong>" );
		
		
		
};


