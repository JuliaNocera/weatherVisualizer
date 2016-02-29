angular
	.module('weatherService', [])

	.factory('GetWeather', function($http) {
		return {
			get: function(location) {
				return $http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${location}&APPID=38dbfb54cbadfc4aa3b3c161d09de83d`);
			}, 
			greeting: function() {
				return "Find your local weather";
			}
		}
	});