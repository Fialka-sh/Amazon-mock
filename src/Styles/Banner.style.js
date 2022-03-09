import styled, { css } from "styled-components";

const StyledBannerContainer = styled.div`
	width: 100%;

	${(props) =>
		props.styledBanner &&
		css`
			width: 100%;
			height: 150px;

			img {
				z-index: -1;
				width: 100%;
				min-height: 100%;
				mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
			}
		`}

	@media (max-width: 786px) {
		height: 200px;
		margin-bottom: -4px;
	}
	@media (max-width: 700px) {
		margin-bottom: -50px;
	}
`;

const StyledArrowsContainer = styled.div`
	position: relative;
	top: -50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;

	span {
		margin: 15px;
		transform: scale(1.5);
	}

	@media (max-width: 786px) {
		position: relative;
		top: -80px;
		span {
			transform: scale(1.4);
		}
	}
`;

export default StyledBannerContainer;

export { StyledArrowsContainer };
