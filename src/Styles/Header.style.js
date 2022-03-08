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
		margin-top: 20px;
	}
`;
const StyledHeaderTopSearch = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60%;

	@media screen and (max-width: 786px) {
		width: 60%;
	}
`;
const StyledHeaderTopcostumizedSearchIcon = styled(SearchIcon)`
	transform: scale(1.5);
	margin: -7px;
	border-radius: 4px;
	padding: 3px;
	background-color: #e9aa5a;

	@media screen and (max-width: 786px) {
		transform: scale(1.35);
		margin: -5px;
	}
`;
const StyledHeaderTopNav = styled.div`
	display: flex;
	justify-content: space-around;
	max-width: 30%;
	margin: 10px;
	color: white;

	@media screen and (max-width: 786px) {
		display: none;
	}
`;
const StyleHeaderTopNavOptions = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 80px;
	color: white;

	span {
		font-size: 10px;
	}

	span:nth-child(2) {
		font-size: 13px;
		font-weight: 800;
	}
`;
const StyledHeaderTopCart = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0px 15px;
	color: white;

	p {
		margin-top: 3px;
		margin-bottom: -3px;
		color: rgb(255, 216, 20);
		font-weight: 600;
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
	background-color: rgb(35, 47, 62);
	color: white;
	font-size: 12px;

	p {
		margin: 2px 6px;
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
