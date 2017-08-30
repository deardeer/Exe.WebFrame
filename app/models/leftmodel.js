var Backbone = require('backbone');
var d3 = require('d3');

var LeftModel = Backbone.Model.extend({
	defaults:
	{
		'a': '',
		'b': '',
		'datalist': []
	},
	initialize: function(){
		var self = this;
		console.log(' init model ');
		//load local csvfile
		d3.csv('data/test.csv', function(d){
			console.log(' row ', d.name, d.value);
			return {
				'name': d.name,
				'value': +d.value,
			}
		}, 
		function(data){
			var datalist = [];
			for (var i = data.length - 1; i >= 0; i--) {
				datalist.push(data[i]);
			};
			self.set('datalist', datalist);
		});
	},
	validate: function(){
		console.log(' valid when setting value in model ');
	}
});

module.exports = LeftModel;