import React from "react";

function Slider({ bannerToShow }) {
	return (
		<>
			<img className='home__banner_img' src={bannerToShow} alt='top-banner' />
		</>
	);
}

export default Slider;
