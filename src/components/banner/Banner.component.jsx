import React from 'react';
import './Banner.style.scss';

function Banner({ title }) {
	return (
		<div className='Banner'>
			<h4>{title}</h4>
		</div>
	);
}

export default Banner;
