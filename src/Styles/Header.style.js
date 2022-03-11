import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledHeader = styled.div`
	z-index: 100;
	position: sticky;
	top: 0;
	flex-direction: column;
	height: 90px;
	background: rgb(0, 0, 0);
`;
const StyledHeaderTop = styled.div`
	display: flex;
	justify-content: space-between;
	height: 60px;
`;
const StyledHeaderTopLogo = styled.img`
	width: 100px;
	margin: 0 20px;
	margin-top: 16px;
	object-fit: contain;

	@media (max-width: 786px) {
		height: 30px;
		margin: 0px;
		margin-top: 20px;
	}
`;
const StyledHeaderTopSearch = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60%;
	margin: 0px;
	padding: 0px;

	@media screen and (min-width: 1000px) {
		width: 75%;
	}
`;
const StyledHeaderTopcostumizedSearchIcon = styled(SearchIcon)`
	transform: scale(1.5);
	border-radius: 0px 4px 4px 0px;
	padding: 3px;
	background-color: #febd69;

	@media screen and (max-width: 786px) {
		transform: scale(1.35);
		margin: -5px;
	}
`;
const StyledHeaderTopNav = styled.div`
	display: flex;
	max-width: 30%;
	color: white;

	@media screen and (max-width: 786px) {
		display: none;
	}
`;
const StyleHeaderTopNavOptions = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	align-items: center;
	width: 80px;
	margin: 2px 0px;
	border-radius: 3px;
	color: white;

	span {
		font-size: 10px;
	}

	span:nth-child(2) {
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
const StyledHeaderTopCart = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	margin: 2px 15px 2px 0px;
	border-radius: 3px;
	padding: 0px 4px 10px 4px;
	color: white;
	:hover {
		border: 1px solid white;
	}

	p {
		position: relative;
		top: 3px;
		left: 7px;
		color: #f08804;
		font-weight: 600;
	}
	& > div {
		display: flex;
		align-items: flex-end;
	}
	& > div > span {
		margin-bottom: 3px;
		margin-left: -2px;
	}
	@media screen and (max-width: 786px) {
		margin-right: 7px;

		& > div > span {
			display: none;
		}
	}
`;

const StyledHeaderTopCostumizedCartIcon = styled(ShoppingCartIcon)`
	color: white;
`;
const StyledHeaderMenuStripe = styled.div`
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
		p {
			display: none;
		}
	}
`;

export default StyledHeader;
export {
	StyledHeaderTop,
	StyledHeaderMenuStripe,
	StyledHeaderTopSearch,
	StyledHeaderTopNav,
	StyledHeaderTopCart,
	StyledHeaderTopLogo,
	StyledHeaderTopcostumizedSearchIcon,
	StyledHeaderTopCostumizedCartIcon,
	StyleHeaderTopNavOptions,
};
