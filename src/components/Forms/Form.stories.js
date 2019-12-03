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
			type='select'
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
			type='select'
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
			type='select'
			placeholder='Select'
			// options={this.state.options}
			// value={this.state.options}
			// handleChange={this.handleInput}
			select
			large
		/>
	))
	.add("Small Select Shaded", () => (
		<Form
			title='select'
			type='select'
			placeholder='Select'
			// options={this.state.options}
			// value={this.state.options}
			// handleChange={this.handleInput}
			select
			small
			shaded
		/>
	))
	.add("Medium Select Shaded", () => (
		<Form
			title='select'
			type='select'
			placeholder='Select'
			// options={this.state.options}
			// value={this.state.options}
			// handleChange={this.handleInput}
			select
			medium
			shaded
		/>
	))
	.add("Large Select Shaded", () => (
		<Form
			title='select'
			type='select'
			placeholder='Select'
			// options={this.state.options}
			// value={this.state.options}
			// handleChange={this.handleInput}
			select
			large
			shaded
		/>
	))
	.add("Small Input With Button", () => (
		<Form
			title='Voucher'
			email='Email'
			type='input'
			// value={this.state.input}
			// handleChange={this.handleInput}
			placeholder='Voucher Code'
			inputButton
			small
		/>
	))
	.add("Large Input With Button", () => (
		<Form
			title='Voucher'
			email='Email'
			type='input'
			// value={this.state.input}
			// handleChange={this.handleInput}
			placeholder='Voucher Code'
			inputButtonLg
			large
		/>
	));
// .add("Checkbox", () => (
// 	<Form checked={this.state.checked} onChange={this.handleCheckboxChange} />
// ));
import Counter from "../Counter/Counter";
let increaseCount;
storiesOf("Counter", module).add("Counter Component", () => (
	<Counter className='counter-button' value={0} min={-10} max={11} />
));
