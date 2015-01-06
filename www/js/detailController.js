angular.module("MyApp")

.controller("DetailCtrl", function($scope) {
    $scope.dish =  {
        category: '',
        title: '',
        description: '',
        img: '',
        recipes: '',
        preparationMethod: ''    
    };
    
});