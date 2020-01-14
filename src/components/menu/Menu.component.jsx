import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.style.scss';

function Menu({ menuState }) {
	return (
		<div className={`Menu ${menuState ? 'unhidden' : 'hidden'}`}>
			<h2>Menu</h2>
			<Link to='' />
		</div>
	);
}

export default Menu;
