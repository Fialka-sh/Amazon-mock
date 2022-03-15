import styled, { css } from "styled-components";
import StarIcon from "@mui/icons-material/Star";

const StyledStarContainer = styled.div`
	/* background-color: pink; */
	@media screen and (max-width: 786px) {
		/* transform: scale(0.8); */
	}
`;
export const StyledStar = styled(StarIcon)`
	color: #febd69;
	transform: scale(0.7);
	/* background-color: pink; */
	margin-right: -5px;
	margin-left: -4px;

	${(props) =>
		props.stylestar &&
		css`
			/* background-color: pink; */
			float: right;
		`}
`;

export default StyledStarContainer;
