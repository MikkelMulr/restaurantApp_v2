import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.style.scss';
import Banner from '../../components/banner/Banner.component';

export class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<div className='Home--banners'>
					<Link to={{ pathname: '/restaurant', state: { title: "El Grande" } }}>
						<Banner title='El Grande' />
					</Link>
					<Link to={{ pathname: '/restaurant', state: { title: "The Chili House" } }}>
						<Banner title='The Chili House' />
					</Link>
					<Link to={{ pathname: '/restaurant', state: { title: "Five Vines" } }}>
						<Banner title='Five Vines' />
					</Link>
				</div>
			</div>
		);
	}
}

export default Home;
