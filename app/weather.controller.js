angular
	
	.module('WeatherControllers', ['ngResource'])

	.controller('WeatherCtrl', function(GetWeather, $scope, $http) {
		$scope.greeting = GetWeather.greeting();

		$scope.inputLocation = '';
		var zip = $scope.inputLocation;

		$scope.getWeather = function(zip) {
			GetWeather.get($scope.inputLocation)
				.success(function(res) {
					var kelvin = res.main.temp;
					var fahrenheit = Math.floor((kelvin * 9/5 - 459.67));
					var celsius = Math.floor((kelvin - 273.15));
					$scope.result = `Right now in ${res.name} it is ${celsius} ℃ / ${fahrenheit} °F and ${res.weather[0].main}`;
					$scope.inputLocation = '';
					// $scope.descriptionTitle = res.weather
					console.log(`In ${res.name} the temp in celsius is: ${celsius} and in fahrenheit is: ${fahrenheit}`);
					if(res.weather[0].main === "Clear") {
						$scope.weatherDesciption = "gray";
					}
					console.log(res.weather[0].main)
					console.log(res.weather[0].description)

				})
				.error(function(err, res) {
					console.log(err);
				})
		};	

	});