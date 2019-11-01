import React, { Component } from "react";
import img from "../../../../images/full-cart.svg";
import "../Thumbnail.css";

class CircleCartImageFull extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class='circle-cart'>
				<img src={img} />
			</div>
		);
	}
}

export default CircleCartImageFull;
