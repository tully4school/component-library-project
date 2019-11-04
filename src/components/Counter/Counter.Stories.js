import React from "react";
import { storiesOf } from "@storybook/react";
import Counter from "./Counter.js";
let increaseCount;
storiesOf("Counter", module).add("Counter", () => (
	<Counter className='counter-button' />
));
