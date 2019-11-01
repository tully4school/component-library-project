import React, { Component } from "react";
import "./Thumbnail.css";
import PriceNew from "./PriceNew.js";
import PriceOld from "./PriceOld.js";

class Price extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class='prices'>
				<PriceNew />
				<PriceOld />
			</div>
		);
	}
}

export default Price;
