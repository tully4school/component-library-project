import React from "react";
import { storiesOf } from "@storybook/react";
import Counter from "./Counter.js";
storiesOf("Counter", module);
.add('Counter', () => <Form type="button" value={0} plus="+" minus="-" max={10} min={0} step={2} counter />)
