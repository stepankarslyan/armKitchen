angular.module("MyApp").controller("DetailCtrl", function($scope, $routeParams, $location, DishService) {
    $scope.init = function() {
		$scope.dish =  {};
		if($routeParams.id) {
			$scope.getDishById($routeParams.id);
		}
	};
	
	
	$scope.save = function() {
		DishService.post($scope.dish);
		$scope.dish = {};
		$location.path("/list");
	};
	
	
	$scope.reset = function() {
		$scope.dish = {};
	};
	
	$scope.getDishById = function(id) {
		DishService.getById(id, function(dish) {
			$scope.dish = dish;
		});
	}; 
	
	$scope.cancel = function() {
		$location.path("/list");
	};
	
	$scope.init();
});