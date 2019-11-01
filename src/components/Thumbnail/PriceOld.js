import React, { Component } from "react";
import "./Thumbnail.css";
class PriceOld extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class='price'>
				<p class='price-old'>$599</p>
			</div>
		);
	}
}
export default PriceOld;
