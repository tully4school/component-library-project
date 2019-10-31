import React from "react";
import "./Form.css";

const Form = props => {
	let classList = "";
	let types = ["input", "select", "textButton", "checkbox"];
	if (types.includes(props.type)) {
		if (props.email) {
			classList += ` form-${props.type}`;
		}
	}
	return (
		<div className='form-small'>
			<label htmlFor={props.name} className='form-label'>
				{props.title}
			</label>
			<input
				className={`form-${props.type}`}
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
