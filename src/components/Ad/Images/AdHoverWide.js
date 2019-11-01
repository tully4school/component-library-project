import React from "react";
import "./Thumbnail.css";
import "./ContainerWide.css";
import ComputerImg from "./Images/ComputerImage.js";
import ProductName from "./ProductName.js";
import Ratings from "./Images/Ratings.js";
import Prices from "./Price.js";
import ThumbnailHover from "./ThumbnailHover";

class AdWide extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	getInitialState() {
		return {
			isMouseInside: false
		};
	}
	mouseEnter = () => {
		this.setState({ isMouseInside: true });
	};
	mouseLeave = () => {
		this.setState({ isMouseInside: false });
	};
	render() {
		return (
			<div
				className='container-wide'
				onMouseEnter={this.mouseEnter}
				onMouseLeave={this.mouseLeave}
			>
				{this.state.isMouseInside ? <ThumbnailHover /> : null}
				<div class='image'>
					<ComputerImg />
				</div>
				<hr />
				<div class='name'>
					<ProductName />
				</div>
				<div>
					<Ratings />
				</div>
				<div>
					<Prices />
				</div>
			</div>
		);
	}
}

export default AdWide;
