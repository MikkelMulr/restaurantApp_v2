import React, { Component } from 'react';
import './Restaurant.style.scss';

class Restaurant extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.newProps = this.props.location.state;

	}

	render() {
		// Restaurant component will be template that accepts props to populate it's content for one of three different restaurants
		return (
			<div className='Restaurant'>
				<h2>{this.newProps.title}</h2>
			</div>
		);
	}
}

export default Restaurant;
