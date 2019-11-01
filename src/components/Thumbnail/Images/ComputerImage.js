import React, { Component } from "react";
import img from "../../../../images/computerimg.svg";
import "../Thumbnail.css";

class Image extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class='computer-img'>
				<img src={img} />
			</div>
		);
	}
}

export default Image;
