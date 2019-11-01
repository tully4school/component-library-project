import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Form.js";

storiesOf("Form", module)
	.add("Small Form", () => (
		<Form
			title='Email'
			email='Email'
			type='input'
			value=''
			handleChange=''
			placeholder='Email'
			small
		/>
	))
	.add("Medium Form", () => (
		<Form
			title='Email'
			email='Email'
			type='input'
			value=''
			handleChange=''
			placeholder='Email'
			medium
		/>
	))
	.add("Large Form", () => (
		<Form
			title='Email'
			email='Email'
			type='input'
			value=''
			handleChange=''
			placeholder='Email'
			large
		/>
	));
