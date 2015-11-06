angular.module('kB')

.controller('ArticleCreateCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
	$http.get('/categories').success(function (data) {
		$scope.categories = data;
	});

	$scope.addArticle = function () {
		var data = {
			title: $scope.title,
			body: $scope.body,
			category: $scope.category
		};

		$http.post('/articles', data).success(function (data, status) {
			console.log(status);
		});

		$location.path('/articles');
	}
}]);
