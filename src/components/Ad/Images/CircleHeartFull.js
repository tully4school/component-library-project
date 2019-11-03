import React, { Component } from "react";
import img from "../../../../images/full-heart.svg";
import "../Thumbnail.css";

class CircleHeartImageFull extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class='circle-heart'>
				<img src={img} />
			</div>
		);
	}
}

export default CircleHeartImageFull;
//import as svg!!!!
