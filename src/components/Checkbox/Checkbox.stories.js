import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox.js";

storiesOf("Checkbox", module)
	.add("Checkbox Black", () => <Checkbox />)
	.add("Checkbox Blue", () => <Checkbox blue label='' />)
	.add("Checkbox Black", () => (
		<Checkbox label="Don't show this popup again" />
	));
