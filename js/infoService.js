(function(){
 
var getInfoService = function($http) {

	var getInfo = function() {
		return $http.get('json/startup-weekend.json')
					.then(function(data) {
						return data;
					});
	};

	return {
		getInfo : getInfo
	};


};

	var app = angular.module('budgeTsu');
	app.factory('getInfoService', getInfoService);

}());