import React from "react";
import "./Form.css";
import arrowDown from "../../../images/arrowdown.svg";

const Form = props => {
	let classList = "";
	let types = ["input", "select", "textButton", "checkbox"];
	if (types.includes(props.type)) {
		classList += `form-${props.type}`;
		console.log(props.type);
	}
	if (props.small) {
		classList += ` form-${props.type}-sm`;
	}
	if (props.medium) {
		classList += ` form-${props.type}-md`;
	}
	if (props.large) {
		classList += ` form-${props.type}-lg`;
	}
	if (props.shaded) {
		classList += ` form-${props.type}-shaded`;
	}
	if (props.inputButton) {
		classList += ` form-${props.type}-button`;
	}
	if (props.input) {
		return (
			<div className='form'>
				<label htmlFor={props.name} className='form-label'>
					{props.title}
				</label>
				<input
					className={classList}
					name={props.email}
					type={props.type}
					value={props.value}
					onchange={props.handleChange}
					placeholder={props.placeholder}
				/>
			</div>
		);
	}
	if (props.select) {
		return (
			<div className='form'>
				<select
					className={classList}
					type={props.type}
					value={props.value}
					onChange={props.handleChange}
				>
					<option value=''>{props.placeholder}</option>
					{/* {props.options.map(option => {
						return (
							<option key={option} value={option} label='option'>
								{option}
							</option>
						); */}
				</select>
			</div>
		);
	}
	// if (props.checkbox) {
	// 	return class Checkbox extends React.Component {
	// 		state = {
	// 			checked: false
	// 		};
	// 		handleCheckboxChange = event =>
	// 			this.setState({ checked: event.target.checked });
	// 		render() {
	// 			return (
	// 				<div>
	// 					<label>
	// 						<Checkbox
	// 							checked={this.state.checked}
	// 							onChange={this.handleCheckboxChange}
	// 						/>
	// 					</label>
	// 				</div>
	// 			);
	// 		}
	// 	};
	// }
	// if (props.inputButton) {
	// 	return (
	// 		<form>
	// 			<input className={classList} />
	// 			<button className='button-primary'>Voucher</button>
	// 		</form>
	// 	);
	// }
};
export default Form;
