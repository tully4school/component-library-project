import React from "react";
import "./Counter.css";
import CounterAdd from "./CounterAdd.js";

class Counter extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			count: this.props.value,
			max: this.props.max,
			min: this.props.min
		};
	}
	increaseCount = () => {
		if (this.state.count < this.state.max) {
			let count = this.state.count + 1;
			this.setState({
				count: count
			});
		} else {
			let count = this.state.count + 0;
			this.setState({
				count: count
			});
		}
	};
	decreaseCount = () => {
		if (this.state.count > this.state.min) {
			let count = this.state.count - 1;
			this.setState({
				count: count
			});
		} else {
			let count = this.state.count - 0;
			this.setState({
				count: count
			});
		}
	};
	render() {
		console.log("this is" + this.props.className);
		console.log(this.state.max);
		return (
			<div className='counter'>
				<button class={this.props.className} onClick={this.increaseCount}>
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
