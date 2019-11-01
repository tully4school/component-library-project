import React, { Component } from "react";
import cart from "../../../../images/circlecart.svg";
import "../Thumbnail.css";

class CircleCartImage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class='circle-cart'>
				<img src={cart} />
			</div>
		);
	}
}

export default CircleCartImage;
