var Marionette = require('backbone.marionette');
var LeftModel = require('models/leftmodel');

var LeftView = Marionette.ItemView.extend({
	template: "#leftview-template",
	model: LeftModel,
	modelEvents:{
		'change:a': 'changea',
		'change:datalist': 'changedatalist',
	},
	events:{
		'click': 'onClick',
	},
	onRender: function(){
		console.log(" render left view ", this.model.get('a'));
	},
	onClick: function(){
		console.log(" click left view ");
		this.model.set('a', '10');
	},
	changea: function(){
		console.log(" change a ");
	},
	changedatalist: function(){
		console.log(' change data list ', this.model.get('datalist'));
	}
});

module.exports = LeftView;