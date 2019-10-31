import React from "react";
import "./Form.css";
import { checkPropTypes } from "prop-types";

const Form = props => {
let classList = ""
let types = [input, select, textButton, checkbox]
if (props.email) {
    classList += {` form-${props.email}`}
}
return (
    <div className="form">
        <input 
        className = {`form-${props.email}`}
        name = {props.email}
        type = {props.type}
        value = {props.value}
        onchange = {props.handleChange}
        placeholder = {props.placeholder}
        />
    </div>
)
}
export default Form;
