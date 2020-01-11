import React, { Component } from 'react';
import './Restaurant.style.scss';

class Restaurant extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			about: '',
			style: '',
			menu: [],
			menuItems: []
		};

	}

	updateStateWithProps = () => {
		this.setState({ title: this.props.restData.name, about: this.props.restData.about, style: this.props.restData.style, menu: this.props.restData.menu });
		console.log(this.state.menu);
	}

	componentDidMount() {
		try {
			this.updateStateWithProps();
			if (this.props.restData) {
			} else {

				setTimeout(() => {
					this.updateStateWithProps();
					// this.createMenuItems();
				}, 250);
			}
		} catch (error) {
			console.log(error);
		}
	}

	createMenuItems = () => {
		let menu = this.state.menu.map(item => {
			return (
				<div className="MenuItem">
					<h3>{item.name} - {item.price}</h3>
					<p>{item.about}</p>
				</div>
			);
		});
		this.setState({ menuItems: menu });
		console.log(this.state.menuItems);
	}

	render() {
		return (
			<div className='Restaurant'>
				<h2>{this.state.title}</h2>
				<div className="Restaurant--menuList">
					{this.state.menuItems}
				</div>
			</div>
		);
	}
}

export default Restaurant;
