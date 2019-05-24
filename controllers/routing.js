var app = angular.module('app',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	})
	.otherwise({
		templateUrl: 'views/routeNotFound.html',
		controller: 'notFoundController'
	});
});

app.controller('homeController', function($scope) {

});

app.controller('notFoundController', function($scope) {
	
});