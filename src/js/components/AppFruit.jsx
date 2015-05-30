var React = require("react");
var Header = require("./Header.jsx");
var List = require("./List.jsx");
var Footer = require("./Footer.jsx");

var AppFruit = React.createClass({
	getInitialState: function () {
		return {
			arrayOfFruit: [{name: "Chicken", number: 6},
							{name: "Apples", number: 2},
							{name: "Oranges", number: 4},
							{name: "Peaces", number: 1}]
		};
	},
	changeText: function(text) {
		return this.setState({headerText: text});
	},
	render: function () {
		return(
			<div className="app-wrapper">
				<Header />
			</div>
		);
	}
});

module.exports = AppFruit;