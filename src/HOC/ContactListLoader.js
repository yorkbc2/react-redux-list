import React, {Component} from "react";
const ContactListHOC = (WrapperComponent) => {
	return class ContactListHOC extends Component {
		render() {
			return this.props.users.fetched === true? (<WrapperComponent {...this.props} />): 
			(<div className='loader'></div>);
		}
	}
}
export default ContactListHOC