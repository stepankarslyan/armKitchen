var producteService = require("../service/producteService");

module.exports = {
	
	register: function(app) {
	    app.get('/admin/dish/:id', this.getById);
	    app.get('/admin/dish/', this.get);
		app.post('/admin/dish', this.save);
		app.put('/admin/dish', this.update);
		app.delete('/admin/dish', this.delete);
	},
	
	getById: function(req, res) {
	    var id = req.params.id;
	    
		producteService.getById(id), function(dish) {
		    res.send(JSON.stringify(dish));
		};
	},
	
	get: function(req, res) {
		var caregory = req.body.caregory;
		console.log(caregory);
		
		producteService.get(caregory, function(dishes) {
		    res.send(JSON.stringify(dishes));
		});
	},
	
	save: function(req, res) {
		var dish = req.body;
		
		producteService.save(dish, function() {
			console.log('done');
		     res.status(200).send();
		});
	},
	
	update: function(req, res) {
	    var update = req.body;
		
		producteService.update(update, function() {
		    res.status(200).send();
		});
	},
	
	delete: function(req, res) {
		var id = req.query.id;
			
		producteService.delete(id, function(){
		    res.status(200).send();
		});
	}
	
};