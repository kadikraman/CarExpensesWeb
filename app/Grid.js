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

// Data table for the expenses
var Grid = React.createClass({
    render: function(){
        return (<Griddle results={data} resultsPerPage={20}/>)
    }
});

module.exports = Grid;