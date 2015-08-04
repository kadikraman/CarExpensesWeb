var Title = require('./../app/Title.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe("Title", function() {

    it("should render text: Car Expenses Web", function() {
        var title = TestUtils.renderIntoDocument(React.createElement(Title));
        expect(React.findDOMNode(title).textContent).toEqual('Car Expenses Web');
    });

});

