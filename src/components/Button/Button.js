import React from "react";
import "./Button.css";
import cartBlue from "../../../images/cart-blue.svg";
import cartRed from "../../../images/cart-red.svg";
import heart from "../../../images/hearts.svg";

// This is a functional component - just sent up a little differently as an arrow function!

const Button = props => {
	let classList = "";
	let types = ["primary", "danger", "warning", "success", "default"];
	if (types.includes(props.type)) {
		classList += ` button-${props.type}`;
	}
	if (props.large) {
		classList += ` button-large`;
	}
	if (props.hover) {
		classList += ` button-${props.type}-hover`;
	}
	if (props.empty) {
		classList += ` button-${props.type}-empty`;
	}
	if (props.light) {
		classList += ` button-${props.type}-light`;
	}
	if (props.cart) {
		classList += ` button-${props.type}-cart`;
		return (
			<button className={classList} onClick={props.onClick}>
				<img src={cartBlue} alt='cart' />
				<span>Add To Cart</span>
			</button>
		);
	}
	if (props.favorites) {
		classList += ` button-${props.type}-favorites`;
		return (
			<button className={classList} onClick={props.onClick}>
				<img src={heart} alt='heart' />
				<span>Add To Favorites</span>
			</button>
		);
	}
	if (props.sm) {
		classList += ` button-${props.type}-fav-sm`;
		return (
			<button className={classList} onClick={props.onClick}>
				<img src={heart} alt='heart' />
			</button>
		);
	}
	if (props.cartsm) {
		classList += ` button-${props.type}-red-sm`;
		return (
			<button className={classList} onClick={props.onClick}>
				<img src={cartRed} alt='redCart' />
			</button>
		);
	}

	return (
		<button className={classList} onClick={props.onClick}>
			Do Something
		</button>
	);
};

export default Button;
