import React, { Component } from 'react';

const ContactListGroupHOC = (WrappedComponent) => {
	class ContactListGroupHOC extends Component {
		render() {
			return this.props.users.filteredData.length > 0? (<WrappedComponent {...this.props} />)
				: (<div className="alert alert-danger">No Data Here. Check your searchBox!</div>)
		}
	}

	ContactListGroupHOC.displayName = WrappedComponent.displayName || "HOCChild";
	return ContactListGroupHOC;
}

export default ContactListGroupHOC