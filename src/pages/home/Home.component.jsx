import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.style.scss';
import Banner from '../../components/banner/Banner.component';

export class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<div className='Home--banners'>
					<Link to='/restaurant'>
						<Banner title='El Guapo Grande' />
					</Link>
					<Link to='/restaurant'>
						<Banner title='The Chili House' />
					</Link>
					<Link to='/restaurant'>
						<Banner title='Five Vines' />
					</Link>
				</div>
			</div>
		);
	}
}

export default Home;
