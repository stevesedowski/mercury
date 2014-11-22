(function(){
	var app = angular.module('budgeTsu', []);

	app.controller('MainController', function($scope, $http) {
		//$scope.info = 'message here';
		// $scope.rent = 232;
		// $scope.water = 33;
		
		var result = $http.get('json/startup-weekend.json');
			result.success(function(data){
				$scope.info = data;
				$scope.rent = 		parseFloat(data.Bills.Housing.Rent);
				$scope.water = 		parseFloat(data.Bills.Housing.Water);
				$scope.electric = 	parseFloat(data.Bills.Housing.Electricity);
				$scope.internet = 	parseFloat(data.Bills.Housing.Internet);
				$scope.gas = 		parseFloat(data.Bills.Housing.Gas);
			})

		// var getInfo = function() {
		// 	return $http.get('json/startup-weekend.json')
		// 			.then(function(data) {
		// 				return data;
		// 			});
		// };

		// var whenGotInfo = function(response){
		// 	$scope.user = response.data;
		// 	$scope.rent = user.bills.housing.water;
		// };

		// $scope.getInfo = function(){
		// 	$http.get('json/starup-weekend.json')
		// 		.then(whenGotInfo, onError);
		// };

		
	});
}());