import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export const StyledSearchContainer = styled.div`
	display: flex;
	width: 80vw;
	padding: 6px;
`;

export const StyledSearchIcon = styled(SearchIcon)`
	transform: scale(1.2);
	margin-top: 3px;
	margin-left: -5px;
	border-radius: 4px;
	padding: 3px;
	background-color: #febd69;

	@media screen and (min-width: 786px) {
		border-radius: 0px 4px 4px 0px;
	}
`;
