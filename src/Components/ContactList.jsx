import React, {Component} from "react"
import ContactListHOC from "./../HOC/ContactListLoader.js"
import SearchBox from "./SearchBox.jsx"
import {
	usersSearchBox
} from "./../Store/actions/usersActions.js"
import {connect} from "react-redux"
import ContactListGroup from "./ContactListGroup.jsx"

class ContactList extends Component {
	constructor(props) {
		super(props);
		this.onSearchChange = this.onSearchChange.bind(this);
	}
	onSearchChange(text) {
		this.props.dispatch(usersSearchBox(text))
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<div className="card">
							<div className="card-body">
								<SearchBox onChange={this.onSearchChange} />
								<ContactListGroup {...this.props} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ContactListHOC(ContactList)