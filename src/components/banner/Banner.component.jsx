import React from 'react';
import './Banner.style.scss';

function Banner({ title, bannerId, updateCurrentRest }) {
	return (
		<div className={`Banner Banner--${bannerId}`} onClick={() => updateCurrentRest(bannerId)}>
			<h4>{title}</h4>
		</div>
	);
}

export default Banner;
