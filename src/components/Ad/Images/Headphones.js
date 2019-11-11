import React, { Component } from "react";
import img from "../../../../images/headphones.svg";
import "../Thumbnail.css";

class Image extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class='headphones-img'>
				<img src={img} />
			</div>
		);
	}
}

export default Image;
