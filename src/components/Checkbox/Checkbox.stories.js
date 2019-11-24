import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox.js";

storiesOf("Checkbox", module)
	.add("Checkbox Black", () => (
		<Checkbox name='black' text='optional' color='black' />
	))
	.add("Checkbox Blue", () => (
		<Checkbox name='blue' text='optional' color='blue' />
	));
