angular.module("MyApp")

.controller("ListCtrl", function($scope, $location, DishService) {
    
    $scope.init = function() {
		  $scope.currentCategory;
		  $scope.dishCategories = ['salad','axcan','tolma'];
		  $scope.categoryContent = [];
		  
		  $scope.$watch("currentCategory", function(newCategory, oldCategory) {
		  	if(newCategory) {
		  		$scope.getCategoryContent(newCategory);
		  	}
		  });
		  
    };
    
    $scope.getCategoryContent = function(category) {
    	DishService.get(category, function(content) {
				console.log(content);
    		$scope.categoryContent = content;
    	});
    };
    
    $scope.edit = function(dish) {
    	$location.path("/details/" + dish._id);
    };
    
    $scope.remove = function(dish) {
    	DishService.remove(dish._id, function() {
    		var index = $scope.categoryContent.indexOf(dish);
    		$scope.categoryContent.splice(index, 1);
    		$scope.$apply();
    	});
    };
    
    $scope.init();
    
});
