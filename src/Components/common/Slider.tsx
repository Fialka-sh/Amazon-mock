import { StyledBanner } from "../../Styles/Banner.style";

interface bannerProps {
	banner: string;
}

function Slider(props: bannerProps): JSX.Element {
	return (
		<StyledBanner>
			<img src={props.banner} alt='top-banner' />
		</StyledBanner>
	);
}

export default Slider;
