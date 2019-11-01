import React, { Component } from "react";
import img from "../../../../images/circleheart.svg";
import "../Thumbnail.css";

class CircleHeartImage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class='cicle-heart'>
				<img src={img} />
			</div>
		);
	}
}

export default CircleHeartImage;
