var React = require("react");

var Header = React.createClass({
	changeHandler: function(e) {
		var val = e.target.value;
		this.props.changeText(val);
	},
	render: function() {
		return (
			<form className="fruit-header">
				<input className="searchbar" onChange={this.changeHandler} value={this.props.headerText} type="text" placeholder="5-a-day tracker" />
				<button className="plus">
					<img src="assets/img/glyphicon-leaf.png" />
				</button>
			</form>
		);
	}
});

module.exports = Header;