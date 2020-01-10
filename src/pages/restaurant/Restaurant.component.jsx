import React, { Component } from 'react';
import './Restaurant.style.scss';

class Restaurant extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'placeholder',
			about: '',
			style: '',
			menu: []
		};

	}

	componentDidMount() {
		this.setState({ title: this.props.restData.name, about: this.props.restData.about, style: this.props.restData.style, menu: this.props.restData.menu });
	}

	render() {
		// console.log(this.state.title);
		// console.log(this.props.restData);
		// Restaurant component will be template that accepts props to populate it's content for one of three different restaurants
		return (
			<div className='Restaurant'>
				<h2>{this.props.restData.name}</h2>
			</div>
		);
	}
}

export default Restaurant;
