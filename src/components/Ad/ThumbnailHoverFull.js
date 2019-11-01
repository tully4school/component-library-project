import React, { Component } from "react";
import CircleHeart from "./Images/CircleHeartFull.js";
import CircleCart from "./Images/CircleCartFull.js";
import "./Thumbnail.css";

class ThumbnailHoverFull extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class='hover-over'>
				<CircleHeart />
				<CircleCart />
			</div>
		);
	}
}

export default ThumbnailHoverFull;
