import React, { Component } from "react";
import "./Checkbox.css";
import blackCheck from "../../../images/checkboxempty.png";
import blackCheckChecked from "../../../images/checkbox - checked.png";
import blueCheck from "../../../images/checkboxblue.png";
import blueCheckChecked from "../../../images/checkbox - checkedblue.png";
class Checkbox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleCheck: false
		};
		this.handleCheck = this.handleCheck.bind(this);
	}
	handleCheck = e => {
		e.preventDefault();
		this.setState({ toggleCheck: !this.state.toggleCheck }); //doing the opposite of whatever the state is
	};
	render() {
		return (
			<div className='checkbox' onClick={this.handleCheck}>
				{this.state.toggleCheck ? (
					<div className='checked'>
						<img src={this.props.blue ? blueCheckChecked : blackCheckChecked} />
					</div>
				) : (
					<div className='empty'>
						<img src={this.props.blue ? blueCheck : blackCheck} />
					</div>
				)}
				<label>{this.props.label}</label>
			</div>
		);
	}
}
export default Checkbox;
