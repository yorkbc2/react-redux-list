import React, {Component} from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

class App extends Component {
	render() {
		return (
			<Provider></Provider>
		)
	}
}

render(<App />, document.querySelector("#app"));
