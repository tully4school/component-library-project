import React, { Component } from "react";
import CircleHeart from "./Images/CircleHeart.js";
import CircleCart from "./Images/CircleCart.js";
import "./Thumbnail.css";

class ThumbnailHover extends Component {
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

export default ThumbnailHover;
