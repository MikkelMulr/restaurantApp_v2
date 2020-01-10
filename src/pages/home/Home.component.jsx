import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.style.scss';
import Banner from '../../components/banner/Banner.component';

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurantBanners: []
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.createResturantBanner();

		}, 500);
	}

	// PASS REST ID TO UPDATECURRENT FUNCTION SO THAT APP JS KNOWS WHAT DATA TO RENDER OUT

	createResturantBanner = () => {
		let rests = this.props.restData.map((rest, index) =>
			(
				<Link to={{ pathname: '/restaurant', state: {} }} key={index}>
					<Banner title={rest.name} bannerId={rest.id} updateCurrentRest={this.props.updateCurrentRestaurant} />
				</Link>
			)
		);

		this.setState({ restaurantBanners: rests });

	}
	render() {
		// console.log(this.props.restData.restaurants);
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
