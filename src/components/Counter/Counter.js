import React from "react";
import "./Counter.css";
import CounterAdd from "./CounterAdd.js";
class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};
	}
	increaseCount = () => {
		let count = this.state.count + 1;
		this.setState({
			count: count
		});
	};
	decreaseCount = () => {
		let count = this.state.count - 1;
		this.setState({
			count: count
		});
	};
	render() {
		return (
			<div className='counter'>
				<button class='counter-button' onClick={this.increaseCount}>
					+
				</button>
				<p>{this.state.count}</p>
				<button class='counter-button' onClick={this.decreaseCount}>
					-
				</button>
			</div>
		);
	}
}
export default Counter;
