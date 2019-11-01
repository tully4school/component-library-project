import React, { Component } from "react";
import img from "../../../../images/stars.svg";
import "../Thumbnail.css";

class Rating extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class='rating-img'>
				<img src={img} />
			</div>
		);
	}
}

export default Rating;
