angular.module("MyApp")

.controller("ListCtrl", function($scope) {
    $scope.dish =  {
        category: '',
        title: '',
        description: '',
        img: '',
        recipes: '',
        preparationMethod: ''    
    };
    
});