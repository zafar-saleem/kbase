angular.module('kB')

.controller('ArticlesCategoryCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
	$http.get('/articles/category/' + $routeParams.category).success(function (data) {
		$scope.cat_articles = data;
		$scope.category = $routeParams.category;
	});
}]);
