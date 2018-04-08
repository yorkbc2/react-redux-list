import React, {Component} from "react";
import axios from "axios";
import {
	usersFetchStart,
	usersFetchEnd,
	usersFetchError
} from "./../Store/actions/usersActions.js";
import config from "./../../config/config.js";
import {connect} from "react-redux"
import ContactList from "./ContactList.jsx"

class Wrapper extends Component {
	componentWillMount() {
		this.props.dispatch(usersFetchStart());
		axios.get(config.apiUrl)
			.then(({data}) => {
				this.props.dispatch(usersFetchEnd(data.data));
			}) 
			.catch(error => {
				this.props.dispatch(usersFetchEnd(error));
			})
	}
	render() {
		return (<ContactList {...this.props} />)
	}
}

export default connect(
	state => ({
		users: state.users
	})
)(Wrapper);