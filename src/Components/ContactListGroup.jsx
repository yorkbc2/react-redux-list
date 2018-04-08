import React, { Component } from 'react';
import CLGHOC from "./../HOC/ContactListGroupHOC.js"
import ContactItem from "./ContactItem.jsx"

class ContactListGroup extends Component {
	render() {
		return (
			<ul className="list-group">
				{ this.props.users.filteredData.map((item, index) => {
					return (<ContactItem user={item} key={index} />)
				}) }
			</ul>
		)
	}
}

export default CLGHOC(ContactListGroup)