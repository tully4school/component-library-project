import React from "react";
import "./Form.css";
import { format } from "path";

const Form = props => {
	let classList = "";
	let types = ["input", "select", "textButton", "checkbox"];
	if (types.includes(props.type)) {
		classList += ` form-${props.type}`;
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
	return (
		<div className='form'>
			<label htmlFor={props.name} className='form-label'>
				{props.title}
			</label>
			<input
				name={props.email}
				type={props.type}
				value={props.value}
				onchange={props.handleChange}
				placeholder={props.placeholder}
			/>
		</div>
	);
};
export default Form;
