import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import JavaScriptCaculator from "./Component/JavaScriptCaculator.js";
class Index extends React.Component {
	render() {
		return <JavaScriptCaculator />;
	}
}
ReactDOM.render(<Index />, document.querySelector("#root"));
