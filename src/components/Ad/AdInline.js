import React from "react";
import "./Thumbnail.css";
import ComputerImg from "./Images/ComputerImage.js";
import ProductName from "./ProductName.js";
import Ratings from "./Images/Ratings.js";
import Prices from "./Price.js";
import Button from "../Button/Button.js";

class AdInline extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='inline'>
				<div className='inline-left'>
					<ComputerImg />
				</div>
				<div className='inline-right'>
					<div className='line1'>
						<ProductName />
					</div>
					<div className='line2'>
						<Ratings />
						<p className='reviews'>0 Reviews</p>
						<a href='/Submit.html'>Submit a review</a>
					</div>
					<hr />
					<div className='line3'>
						<Prices />
					</div>
					<div className='line4'>
						<p>
							Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida
							et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc
							leifend laorevtr istique et congue. Vivamus adipiscin vulputate g
							nisl ut dolor ...
						</p>
					</div>
					<div className='line5'>
						<Button label='Cart Primary Light' type='primary' light cart />
						<Button
							label='Add To Favorites Light Small'
							type='primary'
							light
							sm
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default AdInline;
