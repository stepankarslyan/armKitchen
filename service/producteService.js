var mongoose = require("mongoose");

//mongoose.connect('mongodb://localhost/armKitchen');

var dishSchema = mongoose.Schema({
    category: String,
    title: String,
    description: String,
    img: String,
    ingredients: String,
    preparationMethod: String
});

var Dish = mongoose.model('Dish', dishSchema);

module.exports = {
	
	getById: function(id, done) {
		Dish.findById(id, function(error, dbDish) {
			if(!error) done(dbDish);
			else console.error('error', error);
		});
	},
	
	get: function(category, done) {
		Dish.find({ category: category}, function (error, dbDishes) {
			if(!error) done(dbDishes);
			else console.error('error', error);
		});
	},
	
	save: function(dish, done) {
		var newDish = new Dish(dish);
	
		newDish.save(function(error) {
			if(!error) done();
			else console.error(error);
		});
	},
	
	update: function(update, done) {
		
		Dish.findByIdAndUpdate(update._id, update, {upsert: true}, function(error) {
			if(!error) done();
			else console.error(error);
		});
	},
	
	delete: function(id, done) {
		Dish.findByIdAndRemove(id, function(error, deletedDish) {
			if(!error) done(deletedDish);
			else console.error(error);
		});
	}
	
};
