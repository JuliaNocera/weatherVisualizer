angular
	
	.module('weatherApp', [
		'ngRoute', 
		'weatherService',
		'WeatherControllers'
	])
	
	.config(function($routeProvider, $locationProvider) {
	  $routeProvider
	  .when('/', {
	    templateUrl: '/weather.home.html',
	    controller: 'WeatherCtrl'
	  })
	  .otherwise({
        redirectTo: '/'
      });

	});