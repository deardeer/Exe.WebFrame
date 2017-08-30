var Marionette = require('backbone.marionette');
var LeftView = require('views/leftview')
var RightView = require('views/rightview')
var BottomView = require('views/bottomview')
require('css/style.css')

var layoutview = Marionette.LayoutView.extend({
		el: "#app-hook",
		template: require("../templates/layoutview.html"),
		regions:{
			'left': '#div1',
			'right': '#div2',
			'bottom': '#div3',
		},
		onShow: function(){
			console.log(' hello 2 ');
			var leftView = new LeftView();
			var rightView = new RightView();
			var bottomView = new BottomView();	

			this.getRegion('left').show(leftView);
			this.getRegion('right').show(rightView);
			this.getRegion('bottom').show(bottomView);
		},
});

module.exports = layoutview;

// var Marionette = require('backbone.marionette');

// var ScatterPlot = Marionette.ItemView.extend({
// 	template: require('../templates/left.html'),
// });

// module.exports = ScatterPlot;

// var Marionette = require('backbone.marionette');
// var ScatterPlot = require('views/scatterplot');
// var MapPlot = require('views/mapplot');
// var GantPlot = require('views/gantplot');

// var LayoutView = Marionette.LayoutView.extend({
// 	template: require('templates/layoutview.html'),
// 	el: '#app-hook',
// 	regions: {
// 		'left': '#div1',
// 		'righttop': '#right-top',
// 		'rightbottom': '#right-bottom',
// 	},
// 	onShow: function(){
// 		//leftview
// 		console.log(' new hello world ');
// 		// var leftview = new ScatterPlot(); 

// 		// //right-top view
// 		// var RightTopView = Marionette.ItemView.extend({
// 		// 	// el: '#right-top',
// 		// 	template: require("../templates/right-top.html"),
// 		// });
// 		// var righttopview = new RightTopView();
// 		// // righttopview.render();

// 		// //right-bottom view
// 		// var RightBottomView = Marionette.ItemView.extend({
// 		// 	// el: '#right-bottom',
// 		// 	template: '#rightbottom-template'
// 		// })
// 		// var rightbottomview = new RightBottomView();
// 		// // rightbottomview.render();

// 		// this.getRegion('left').show(leftview);		
// 		// this.getRegion('righttop').show(righttopview);		
// 		// this.getRegion('rightbottom').show(rightbottomview);

// 	}
// });

// module.exports = LayoutView;