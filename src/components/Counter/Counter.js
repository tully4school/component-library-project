import React from "react";
import "./Counter.css";
class App extends Component {
	constructor() {
		super();

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
		console.log(this.state);
		return (
			<div className='App'>
				<h1>count: {this.state.count}</h1>
				<button onClick={this.increaseCount}>+</button>
				<button onClick={this.decreaseCount}>-</button>
			</div>
		);
	}
}
export default Counter;
