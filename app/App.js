var React = require('react');
var Grid = require('./Grid.js');
var Title = require('./Title.js');

// Container for the entire page
var App = React.createClass({
	render: function() {
		return  (<div><Title/><Grid/></div>);
	}
});
	
module.exports = App;
