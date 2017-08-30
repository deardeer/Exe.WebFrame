var Marionette = require('backbone.marionette');
var LayoutView = require('views/layoutview.js');

var app = new Marionette.Application({
	onStart: function(option){
		console.log(" hello world ");
		//render view	
		var layout = new LayoutView();
		layout.render();
		layout.triggerMethod('show');
	},
});

// var app = new App();
app.start();
console.log('hello');