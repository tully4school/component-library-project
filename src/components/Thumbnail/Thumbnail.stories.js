import React from "react";
import { storiesOf } from "@storybook/react";
import AdHoverEmpty from "./AddHoverEmpty.js";
import AdHoverFull from "./AdHoverFull.js";

storiesOf("Ads", module)
	.add("Ad Hover 1", () => <AdHoverEmpty />)
	.add("Ad Hover 2", () => <AdHoverFull />);
