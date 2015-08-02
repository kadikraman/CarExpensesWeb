/** @jsx React.DOM */
var React = require('react');
var Griddle = require('griddle-react');

var data = [];
for (var i = 1; i < 1000; i++) {
	data.push({
		id: i,
		title: 'Title ' + i,
		count: i * 1000
	});
}


// Title of the page
var Title = React.createClass({
    render: function(){
        return (<div><h1>Car Expenses Web</h1></div>)
    }
});

// Data table for the expenses
var Grid = React.createClass({
   render: function(){
       return (<Griddle results={data} resultsPerPage={20}/>)
   }
});

// Container for the entire page
var App = React.createClass({
	render: function() {
		return  (<div><Title/><Grid/></div>);
	}
});
	
module.exports = App;
