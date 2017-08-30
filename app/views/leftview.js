var Marionette = require('backbone.marionette');

var LeftView = Marionette.ItemView.extend({
	template: "#leftview-template",
});

module.exports = LeftView;