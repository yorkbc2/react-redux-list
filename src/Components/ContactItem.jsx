import React, {Component} from "react";
import PropTypes from "prop-types";
class ContactItem extends Component {
	render() {
		return (
			<li className="list-group-item">
				<img src={this.props.user.avatar} width="50px" />
				&nbsp;
				{this.props.user.id} . {this.props.user.first_name} {this.props.user.last_name} 
			</li>
		)
	}
}
ContactItem.propTypes = {
	user: PropTypes.shape({
		id: PropTypes.number,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		avatar: PropTypes.string
	})
}

export default ContactItem;