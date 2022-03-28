import styled, { css } from "styled-components";
import StarIcon from "@mui/icons-material/Star";

const StyledStarContainer = styled.div`
	@media screen and (min-width: 786px) {
		order: 2;
	}
`;

export const StyledStar = styled(StarIcon)`
	color: #febd69;
	transform: scale(0.7);
	margin-right: -5px;
	margin-left: -4px;

	@media screen and (min-width: 786px) {
		transform: scale(0.9);
		margin-right: -2px;
		margin-left: 0px;
	}

	${(props) =>
		props.styledstarinproductinfo &&
		css`
			float: right;

			@media screen and (min-width: 786px) {
				float: left;
			}
		`}
`;

export default StyledStarContainer;
