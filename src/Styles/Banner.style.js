import styled from "styled-components";

const StyledBannerContainer = styled.div`
	position: relative;
`;

export const StyledBanner = styled.div`
	position: absolute;

	img {
		width: 100%;

		min-height: 330px;
		object-fit: cover;
		mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}
`;

export const StyledArrowsContainer = styled.div`
	position: relative;

	top: 100px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;

	span {
		transform: scale(1.5);
	}

	@media (max-width: 786px) {
		span {
			transform: scale(1.4);
		}
	}
`;

export default StyledBannerContainer;
