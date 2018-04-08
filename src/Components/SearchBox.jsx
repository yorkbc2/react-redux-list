import React, { Component } from 'react';

export default class SearchBox extends Component {
	render() {
		return (
			<div className="form-field">
				<div className="form-group">
					<input onChange={(e) => this.props.onChange(e.target.value)} 
						className="form-control" 
						type="search" 
						placeholder="Search..." />
				</div>
			</div>
		);
	}
}
