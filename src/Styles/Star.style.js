import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";

const StyledStarContainer = styled.div`
	@media screen and (max-width: 786px) {
		transform: scale(0.8);
	}
`;
export const StyledStar = styled(StarIcon)`
	color: #febd69;
`;

export default StyledStarContainer;
