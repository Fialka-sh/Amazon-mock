import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledHeader = styled.div`
	z-index: 40;
	position: sticky;
	top: 0;
	flex-direction: column;
	height: 60px;
	margin-bottom: 25px;
	background: #131921;
`;

export const StyledHeaderTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 40px;

	@media (min-width: 786px) {
		height: 55px;
		padding-top: 5px;
	}
`;

export const StyledHeaderTopCategoryMenu = styled.div`
	width: 25px;
	color: white;
	padding: 2px 2px 2px 5px;
	hr {
		margin: 4px 0;
	}
	@media (min-width: 786px) {
		display: none;
	}
`;

export const StyledHeaderTopLogo = styled.img`
	width: 100px;
	height: 30px;
	object-fit: contain;
	margin-top: 20px;
`;

export const StyledHeaderTopSearch = styled.div`
	position: absolute;
	top: 45px;
	left: 6%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;

	@media screen and (min-width: 786px) {
		position: static;
		width: 75%;
		margin: 0 auto;
	}
`;

export const StyledHeaderTopcostumizedSearchIcon = styled(SearchIcon)`
	margin-top: 0px;
	margin-left: -5px;
	transform: scale(1.2);
	border-radius: 4px;
	padding: 3px;
	background-color: #febd69;

	@media screen and (min-width: 786px) {
		border-radius: 0px 4px 4px 0px;
	}
`;

export const StyledHeaderTopNav = styled.div`
	display: none;

	@media screen and (min-width: 786px) {
		display: flex;
		color: white;
	}
`;

export const StyleHeaderTopNavOption = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	align-items: center;
	margin: 2px 0px 2px 4px;
	border-radius: 3px;
	color: white;

	@media (min-width: 786px) {
		width: 60px;
	}

	span {
		font-size: 10px;
	}

	span:nth-child(2) {
		margin-top: 3px;
		font-size: 13px;
		font-weight: 700;
		:hover {
			transform: scale(1.05);
		}
	}
	:hover {
		border: 1px solid white;
	}
`;
export const StyledHeaderTopNavSign = styled.div`
	width: 80%;
	display: flex;
	justify-content: flex-end;
	padding-right: 10px;

	@media (min-width: 786px) {
		width: 120px;
		& div {
			width: 120px;
		}
	}
`;

export const StyledHeaderTopCart = styled.div`
	margin: 2px 10px 2px 0px;
	color: white;

	& > div > span {
		display: none;
	}

	:hover {
		border: 1px solid white;
		border-radius: 3px;
	}

	p {
		position: relative;
		top: 5px;
		left: 7px;
		color: #f08804;
		font-weight: 500;
	}

	@media screen and (min-width: 786px) {
		margin-top: -5px;
		display: flex;
		justify-content: space-around;
		flex-direction: column;

		& > div > span {
			display: block;
		}
		& > div {
			display: flex;
			align-items: flex-end;
		}
		& > div > span {
			margin-bottom: 3px;
		}
	}
`;

export const StyledHeaderTopCostumizedCartIcon = styled(ShoppingCartIcon)`
	color: white;
`;

export const StyledHeaderMenuStripe = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100vw;
	height: 30px;
	padding-left: 15px;
	background-color: rgb(35, 47, 62);
	color: white;
	font-size: 12px;

	p {
		margin: 2px 7px;
	}
	@media screen and (max-width: 786px) {
		height: 45px;
		p {
			display: none;
		}
	}
`;

export default StyledHeader;
