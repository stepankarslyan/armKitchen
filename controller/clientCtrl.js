var producteService = require("../service/producteService");

module.exports = {
	
	register: function(app) {
	    app.get('/admin/dish/:id', this.getById);
	    app.get('/admin/dish', this.get);
	},
	
	getById: function(req, res) {
	    var id = req.params.id;
	    
		producteService.getById(id), function(dish) {
		    res.send(JSON.stringify(dish));
		};
	},
	
	get: function(req, res) {
		var caregory = req.query.caregory;
		console.log(caregory);
		
		producteService.get(caregory, function(dishes) {
		    res.send(JSON.stringify(dishes));
		});
	}
	
};