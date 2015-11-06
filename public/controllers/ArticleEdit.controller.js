angular.module('kB')

.controller('ArticleEditCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
	$http.get('/categories').success(function (data) {
		$scope.categories = data;
	});

	$http.get('/articles/' + $routeParams.id).success(function (data) {
		$scope.article = data;
	});

	$scope.updateArticle = function () {
		var data = {
			id: $routeParams.id,
			title: $scope.article.title,
			body: $scope.article.body,
			category: $scope.article.category
		};

		$http.put('/articles', data).success(function (data, status) {
			console.log(status);
		});

		$location.path('/articles');
	}
}]);
