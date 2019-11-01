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
	render() {
		return (
			<div className='container-wide'>
				<div class='image'>
					<ComputerImg />
				</div>
				<div class='right-side'>
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
			</div>
		);
	}
}

export default AdWide;
