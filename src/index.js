import React, {Component} from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import store from "./Store/store.js"
import Wrapper from "./Components/Wrapper.jsx"

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Wrapper />
			</Provider>
		)
	}
}

render(<App />, document.querySelector("#app"));
