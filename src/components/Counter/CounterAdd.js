import React, { Component } from "react";
import Counter from "./Counter.js";
class CounterAdd extends Component {
	constructor(props) {
		super(props);
		let increaseCount;
		this.state = {
			count: 0
		};
		increaseCount = () => {
			let count = this.state.count + 1;
			this.setState({
				count: count
			});
		};
	}
	render() {
		return (
			<div>
				<button class='counter-button' onClick={this.increaseCount}>
					+
				</button>
			</div>
		);
	}
}
export default CounterAdd;
