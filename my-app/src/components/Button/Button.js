import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!

const Button = props => {
	let classList = "";
	let types = ["primary", "danger", "warning", "success", "default"];
	if (types.includes(props.type)) {
		classList += ` button-${props.type}`;
	}
	if (props.large) {
		classList += ` button-large`;
	}
	if (props.hover) {
		classList += ` button-${props.type}-hover`;
	}
	if (props.empty) {
		classList += ` button-${props.type}-empty`;
	}
	if (props.light) {
		classList += ` button-${props.type}-light`;
	}

	return (
		<button className={classList} onClick={props.onClick}>
			Do Something
		</button>
	);
};

export default Button;
