import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Form.js";

storiesOf("Form", module)
	.add("Small Input", () => (
		<Form
			title='Email'
			email='Email'
			type='input'
			// value={this.state.input}
			// handleChange={this.handleInput}
			placeholder='Email'
			input
			small
		/>
	))
	.add("Medium Input", () => (
		<Form
			title='Email'
			email='Email'
			type='input'
			// value={this.state.input}
			// handleChange={this.handleInput}
			placeholder='Email'
			input
			medium
		/>
	))
	.add("Large Input", () => (
		<Form
			title='Email'
			email='Email'
			type='input'
			// value={this.state.input}
			// handleChange={this.handleInput}
			placeholder='Email'
			input
			large
		/>
	))
	.add("Small Select", () => (
		<Form
			title='select'
			name='select'
			placeholder='Select'
			// options={this.state.options}
			// value={this.state.options}
			// handleChange={this.handleInput}
			select
			small
		/>
	))
	.add("Medium Select", () => (
		<Form
			title='select'
			name='select'
			placeholder='Select'
			// options={this.state.options}
			// value={this.state.options}
			// handleChange={this.handleInput}
			select
			medium
		/>
	))
	.add("Large Select", () => (
		<Form
			title='select'
			name='select'
			placeholder='Select'
			// options={this.state.options}
			// value={this.state.options}
			// handleChange={this.handleInput}
			select
			large
		/>
	));
