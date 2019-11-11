import React, { Components } from "react";
import "./Thumbnail.css";

class Hot extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='hot'>
				<p className='p-hot'>HOT</p>
			</div>
		);
	}
}
export default Hot;
