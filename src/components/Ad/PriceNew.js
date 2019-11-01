import React, { Component } from "react";
import "./Thumbnail.css";
class PriceNew extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class='price'>
				<p class='price-new'>$499</p>
			</div>
		);
	}
}
export default PriceNew;
