import React from 'react';
import { Link } from 'react-router-dom';
import './Header.style.scss';

function Header({ handleMenuState }) {

	return (
		<div className='Header'>
			<Link to='/'>
				<h2 onClick={handleMenuState}>Family of Restaurants</h2>
			</Link>
			<i className='fas fa-bars' onClick={handleMenuState} />
		</div>
	);
}

export default Header;
