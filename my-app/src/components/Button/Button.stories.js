import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button.js";

storiesOf("Button", module) //names the storybook library
	//PRIMARY
	.add("Primary", () => <Button label='Primary' type='primary' />) //adds the name of the file then adds a label to the button
	.add("Primary Hover", () => (
		<Button label='Primary Hover' type='primary' hover />
	))
	.add("Primary Empty", () => (
		<Button label='Primary Empty' type='primary' empty />
	))
	.add("Primary Light", () => (
		<Button label='Primary Light' type='primary' light />
	))
	.add("Large Primary", () => (
		<Button label='Large Primary Button' type='primary' large />
	))
	.add("Large Primary Empty", () => (
		<Button label='Large Primary Empty' type='primary' empty large />
	))
	.add("Large Primary Light", () => (
		<Button label='Large Primary Light' type='primary' light large />
	))
	//DANGER
	.add("Danger", () => <Button label='Danger' type='danger' />)
	.add("Danger Hover", () => (
		<Button label='Danger Hover' type='danger' hover />
	))
	.add("Danger Empty", () => (
		<Button label='Danger Empty' type='danger' empty />
	))
	.add("Danger Light", () => (
		<Button label='Danger Light' type='danger' light />
	))
	.add("Large Danger", () => (
		<Button label='Large Danger Button' type='danger' large />
	))
	.add("Large Danger Empty", () => (
		<Button label='Large Danger Empty' type='danger' empty large />
	))
	.add("Large Danger Light", () => (
		<Button label='Large Danger Light' type='danger' light large />
	))
	//SUCCESS
	.add("Success", () => <Button label='Success' type='success' />)
	.add("Success Hover", () => (
		<Button label='Success Hover' type='success' hover />
	))
	.add("Success Empty", () => (
		<Button label='Success Empty' type='success' empty />
	))
	.add("Success Light", () => (
		<Button label='Success Light' type='success' light />
	))
	.add("Large Success", () => (
		<Button label='Large Success Button' type='success' large />
	))
	.add("Large Success Empty", () => (
		<Button label='Large Success Empty' type='success' empty large />
	))
	.add("Large Success Light", () => (
		<Button label='Large Success Light' type='success' light large />
	))
	//WARNING
	.add("Warning", () => <Button label='Warning' type='warning' />)
	.add("Warning Hover", () => (
		<Button label='Warning Hover' type='warning' hover />
	))
	.add("Warning Empty", () => (
		<Button label='Warning Empty' type='warning' empty />
	))
	.add("Warning Light", () => (
		<Button label='Warning Light' type='warning' light />
	))
	.add("Large Warning", () => (
		<Button label='Large Warning Button' type='warning' large />
	))
	.add("Large Warning Empty", () => (
		<Button label='Large Warning Empty' type='warning' empty large />
	))
	.add("Large Warning Light", () => (
		<Button label='Large Warning Light' type='warning' light large />
	))
	//DEFAULT
	.add("Default", () => <Button label='Default' type='default' />)
	.add("Default Hover", () => (
		<Button label='Default Hover' type='default' hover />
	))
	.add("Default Empty", () => (
		<Button label='Default Empty' type='default' empty />
	))
	.add("Default Light", () => (
		<Button label='Default Light' type='default' light />
	))
	.add("Large Default", () => (
		<Button label='Large Default Button' type='default' large />
	))
	.add("Large Default Empty", () => (
		<Button label='Large Default Empty' type='default' empty large />
	))
	.add("Large Default Light", () => (
		<Button label='Large Default Light' type='default' light large />
	))
	.add("Cart Primary Light", () => (
		<Button label='Cart Primary Light' type='primary' light cart />
	));
