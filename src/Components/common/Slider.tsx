import React from "react";
import StyledBannerContainer from "../../Styles/Banner.style";

interface bannerProps {
	banner: string;
}

function Slider(props: bannerProps): JSX.Element {
	return (
		<StyledBannerContainer styledBanner>
			<img className='home__banner_img' src={props.banner} alt='top-banner' />
		</StyledBannerContainer>
	);
}

export default Slider;
