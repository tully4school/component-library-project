import React from "react";
import { storiesOf } from "@storybook/react";
import AdHoverEmpty from "./AddHoverEmpty.js";
import AdHoverFull from "./AdHoverFull.js";
import AdHoverWide from "./AdHoverWide.js";
import AdInline from "./AdInline.js";
import AdSmall from "./AdSmall.js";

storiesOf("Ads", module)
	.add("Ad Hover 1", () => <AdHoverEmpty />)
	.add("Ad Hover 2", () => <AdHoverFull />)
	.add("Ad Hover Wide 1", () => <AdHoverWide />)
	.add("Ad Inline", () => <AdInline />)
	.add("Ad Small", () => (
		<AdSmall
			label='Beats Solo 2 On Ear
Headphones - Black'
			price='$499'
			oldPrice='$599'
		/>
	));
