import React from "react";
import Headphones from "./Images/Headphones";
import Ratings from "./Images/Ratings.js";
import Prices from "./Price.js";
import "./Thumbnail.css";
class AdSmall extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='ad-small'>
				<div className='inline-left'>
					<div className='headphones-container'>
						<Headphones />
					</div>
				</div>
				<div className='inline-right'>
					<p className='ad-small-label'>{this.props.label}</p>
					<Ratings />
					<Prices />
				</div>
			</div>
		);
	}
}
export default AdSmall;
