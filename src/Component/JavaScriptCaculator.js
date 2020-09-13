import React from "react";
import "./JavaScriptCaculator.scss";
import caculatorButtons from "../caculatorButton.js";
import handleButton from "../HandleButton/handleButton.js";
class JavaScriptCaculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			operation: "",
			display: "0",
			decimal: true,
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		let button = event.target.value;
		this.setState((prevState) => {
			let newState = handleButton(prevState, button);
			return newState;
		});
	}
	render() {
		// eslint-disable-next-line
		let buttons = caculatorButtons.map((button) => {
			for (let key in button) {
				return (
					<button
						id={key}
						key={key}
						onClick={this.handleClick}
						value={button[key]}
					>
						{button[key]}
					</button>
				);
			}
		});
		return (
			<div id="caculator">
				<div id="operation-display" className="display-1">
					{this.state.operation}
				</div>
				<div id="display" className="display-2">
					{this.state.display}
				</div>
				<div id="controller-interface">{buttons}</div>
			</div>
		);
	}
}
export default JavaScriptCaculator;
