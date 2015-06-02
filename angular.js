angular.module("app", [])
			.controller("FirstCtrl", function FirstCtrl($scope){
				var first = this;
				first.greeting = "First";
				$scope.hello = "something else";
				$scope.categories = [
					{ "name":"category1", "href":"www.category1.com"},
					{ "name":"category2", "href":"www.category2.com"},
				];
			});