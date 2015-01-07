var producteService = require("../service/producteService");

module.exports = {
	
	register: function(app) {
	  app.get('/admin/dish/:id', this.getById);
	  app.get('/admin/dish/', this.get);
		app.post('/admin/dish', this.save);
		app.put('/admin/dish', this.update);
		app.delete('/admin/dish/:id', this.delete);
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
	
	save: function(req, res) {
		var dish = req.body;
		
		producteService.save(dish, function() {
			console.log('saved');
		  res.status(204).send();
		});
	},
	
	update: function(req, res) {
	    var update = req.body;
		
		producteService.update(update, function() {
		  console.log('updated');
		  res.status(204).send();
		});
	},
	
	delete: function(req, res) {
		var id = req.params.id;
			
		producteService.delete(id, function(deletedDish){
		  if(deletedDish) {
				console.log('deleted');
				res.status(204).send();
		  }
		  else {
		  	console.log('not found');
		  	res.status(404).send();
		  }
		});
	}
	
};
