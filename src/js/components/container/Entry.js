import React, { Component } from "react";
import ReactDOM from "react-dom";
import Homepage from "../presentational/Homepage";

export default class App extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div>
				<Homepage />
			</div>
		);
	}
}

const wrapper = document.getElementById("wrapper");
wrapper ? ReactDOM.render(<App />, wrapper) : false;