import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.style.scss';
import Banner from '../../components/banner/Banner.component';

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			restData: {},
			restaurantBanners: []
		}
	}

	componentDidMount() {
		// this.setState({ restData: this.props.restData });
		setTimeout(() => {
			this.createResturantBanner();

		}, 500);
	}

	createResturantBanner = () => {
		let rests = this.props.restData.restaurants.map((rest, index) =>
			(
				<Link to={{ pathname: '/restaurant', state: { title: rest.name, about: rest.about, style: rest.style, menu: rest.menu } }} key={index}>
					<Banner title={rest.name} />
				</Link>
			)
		);

		this.setState({ restaurantBanners: rests });

	}
	render() {
		console.log(this.props.restData.restaurants);
		return (
			<div className='Home'>
				<div className='Home--banners'>
					{/* Print out the banners */}
					{this.state.restaurantBanners}
				</div>
			</div>
		);
	}
}

export default Home;
