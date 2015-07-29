
var app = angular.module('ngfx-demo', [
	'ui.router',
	'ngFx',
	'ngAnimate'
]);

app.config(function($stateProvider, $urlRouterProvider){

	

	$stateProvider
	    .state('home', {
	      url: "/",
	      templateUrl: "templates/main.html",
	      controller: 'MainCtrl'
	    })
	    .state('login', {
	      url: "/login",
	      templateUrl: "templates/login.html",
	      controller: 'MainCtrl'
	    });

	$urlRouterProvider.otherwise("/login");
});