import React, { Component } from 'react';
import axios from 'axios';
import './Restaurant.style.scss';

class Restaurant extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			about: '',
			style: '',
			menu: [],
			menuItems: [],
			restData: '',
			error: { msg: '', occured: false }
		};
	}

	updateStateWithData = () => {
		try {
			this.setState({
				title: this.state.restData[this.props.current].name,
				about: this.state.restData[this.props.current].about,
				style: this.state.restData[this.props.current].style,
				menu: this.state.restData[this.props.current].menu,
				restData: ''
			});
		} catch (error) {
			console.log(error);
			this.setState({ error: 'Uh something went wrong!', occured: true });
		}
	};

	componentDidMount() {
		axios
			.get(`./data.json`)
			.then((res) => {
				const restData = res.data.restaurants;
				this.setState({ restData: restData });
			})
			.then(() => {
				this.updateStateWithData();
			})
			.then(() => {
				this.createMenuItems();
			});
	}

	createMenuItems = () => {
		let menu = this.state.menu.map((item) => {
			return (
				<div className='MenuItem'>
					<h3 className='MenuItem--title'>
						{item.name} - <span className='MenuItem--price'>{item.price}</span>
					</h3>
					<p className='MenuItem--desc'>{item.about}</p>
				</div>
			);
		});
		this.setState({ menuItems: menu });
		console.log(this.state.menuItems);
	};

	render() {
		setTimeout(() => {
			console.log(this.state.restData[this.props.current]);
		}, 500);

		return (
			<div className='Restaurant'>
				{this.state.error.occued ? <h2>{this.state.error.msg}</h2> : null}
				<h2>{this.state.title}</h2>
				<div className='Restaurant--menuList'>{this.state.menuItems}</div>
			</div>
		);
	}
}

export default Restaurant;
