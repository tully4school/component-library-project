import React, { Components } from "react";
import "./Thumbnail.css";
import { directive } from "@babel/types";

class AdInline extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="hot">
                <p className="p-hot">HOT</p>
            </div>
        )
    }