var React = require('react');
var Griddle = require('griddle-react');
var fetch = window.fetch;

// Data table for the expenses
var Grid = React.createClass({
    getInitialState: function() {
        return {
            data: []
        };
    },
    componentDidMount: function(){
        fetch('http://carexpensesapi.herokuapp.com/api/expenses/').then(function(response){
            response.json().then(function(data){
                this.setState({
                    data: data
                })
            }.bind(this));
        }.bind(this))
    },
    render: function(){
        return (<div className="col-md-offset-1 col-md-10"><Griddle results={this.state.data}
                         columns={["type", "cost", "date", "mileage", "comment"]}
                         showFilter={true}
                         resultsPerPage={15}/></div>)
    }
});

module.exports = Grid;