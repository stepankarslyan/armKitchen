angular.module("MyApp").factory("DishService", function() {
	return {
		getById: function(id) {
			$.ajax({
				url: "/admin/dish/" + id,
				type: "GET"	,
				success: function(data) {
					console.log(data);
				},
				error: function(error) {
					console.log(error);				
				}
			});
		},
		get: function(category, done) {
			$.ajax({
				url: "/admin/dish" ,
				type: "GET"	,
				data: {
					category: category
				},
				success: function(category) {
					console.log(category);
					done(category);
				},
				error: function(error) {
					console.log(error);				
				}
			});
		},
		post: function(data) {
			$.ajax({
				url: "/admin/dish",
				data: data,
				type: "POST"	,
				success: function(data) {
					console.log(data);
				},
				error: function(error) {
					console.log(error);				
				}
			});
		},
		update: function(data) { 
			$.ajax({
				url: "/admin/dish" ,
				type: "PUT"	,
				data: data,
				success: function(data) {
					console.log(data);
				},
				error: function(error) {
					console.log(error);				
				}
			});
		},
		remove: function(id, done) {
			$.ajax({
				url: "/admin/dish/" + id,
				type: "DELETE"	,
				success: function(data) {
					console.log(data);
					done();
				},
				error: function(error) {
					console.log(error);				
				}
			});
		}
	}
});
