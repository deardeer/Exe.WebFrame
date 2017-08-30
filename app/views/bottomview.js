var Marionette = require('backbone.marionette');

var BottomView = Marionette.ItemView.extend({
	template: "#bottomview-template",
});

module.exports = BottomView;