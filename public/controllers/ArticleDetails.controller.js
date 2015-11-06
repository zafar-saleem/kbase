angular.module('kB')

.controller('ArticleDetailsCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
	$http.get('/articles/' + $routeParams.id).success(function (data) {
		$scope.article = data;
	});

	$scope.removeArticle = function () {
		$http.delete('/articles/' + $routeParams.id).success(function (data) {
			console.log(data);
		});

		$location.path('/articles');
	};
}]);
