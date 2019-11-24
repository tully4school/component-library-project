import React, { Component } from "react";
import "./Checkbox.css";
class Checkbox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: "unchecked"
		};
		this.handleCheckbox = this.handleCheckbox.bind(this);
	}
	handleCheckbox = evt => {
		if (this.state.checked === "unchecked") {
			this.setState({ checked: "checked" });
		}
		if (this.state.checked === "checked") {
			this.setState({ checked: "unchecked" });
		}
	};
	render() {
		return (
			<label className={this.state.checked + "-" + this.props.color}>
				<input
					type='checkbox'
					className={this.state.checked}
					name={this.props.name}
					onChange={this.handleCheckbox}
				/>
				<span className={"check-" + this.props.color} />
			</label>
		);
	}
}
export default Checkbox;
