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
	if (props.inputButtonLg) {
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
				</select>
			</div>
		);
	}
	if (props.inputButton) {
		return (
			<form className='input-button'>
				<input className={classList} placeholder={props.placeholder} />
				<button className='button-primary'>Redeem</button>
			</form>
		);
	}
	if (props.inputButtonLg) {
		return (
			<form className='input-button-lg'>
				<input className={classList} placeholder={props.placeholder} />
				<button className='button-primary button-large button-large-form'>
					Redeem
				</button>
			</form>
		);
	}
};
export default Form;
