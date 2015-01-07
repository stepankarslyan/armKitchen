var producteService = require("../service/producteService");

module.exports = {
	
	register: function(app) {
	    app.get('/admin/dish/:id', this.getById);
	    app.get('/admin/dish', this.get);
	},
	
	getById: function(req, res) {
		var id = req.params.id;

		producteService.getById(id, function(dish) {
			if(dish) {
				console.log('getting dish', dish._id);
				res.send(JSON.stringify(dish));
			}
			else {
				console.log('not found');
				res.status(404).send();
			}
		});
	},
	
	get: function(req, res) {
		var caregory = req.query.category;
		
		producteService.get(caregory, function(dishes) {
			console.log('getting dishes', dishes.length);
			res.send(JSON.stringify(dishes));
		});
	},
	
};
