var app = angular.module('app',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	})
<<<<<<< HEAD
	.when('/program', {
		templateUrl: 'views/programPage.html',
		controller: 'programPageController'
	})
	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'loginController'
	})
=======
>>>>>>> 90481733e7aad45b8aceeeb578e52256591a3bd0
	.otherwise({
		templateUrl: 'views/routeNotFound.html',
		controller: 'notFoundController'
	});
});

app.controller('homeController', function($scope) {

});

<<<<<<< HEAD
app.controller('programPageController', function($scope) {

});

app.controller('loginController', function($scope) {

});

=======
>>>>>>> 90481733e7aad45b8aceeeb578e52256591a3bd0
app.controller('notFoundController', function($scope) {
	
});