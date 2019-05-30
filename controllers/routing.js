var app = angular.module('app',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	})
	.when('/program', {
		templateUrl: 'views/programPage.html',
		controller: 'programPageController'
	})
	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'loginController'
	})
	.otherwise({
		templateUrl: 'views/routeNotFound.html',
		controller: 'notFoundController'
	});
});

app.controller('homeController', function($scope) {

});

app.controller('programPageController', function($scope) {

});

app.controller('loginController', function($scope) {

});

app.controller('notFoundController', function($scope) {
	
});