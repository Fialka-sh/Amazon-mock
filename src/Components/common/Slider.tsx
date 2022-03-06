import React from "react";

interface bannerProps {
	banner: string;
}

function Slider(props: bannerProps): JSX.Element {
	// console.log(bannerToShow);

	return (
		<>
			<img className='home__banner_img' src={props.banner} alt='top-banner' />
		</>
	);
}

export default Slider;
