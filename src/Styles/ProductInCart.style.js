import styled from "styled-components";

const StyledProductInCartContainer = styled.div`
	display: flex;
	height: 150px;
	margin-bottom: 10px;
	border-bottom: 1px solid gray;
	padding-top: 5px;
`;

export const StyledProductInCartInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 70%;
	padding: 0px 10px;
	font-size: 15px;
	@media (max-width: 786px) {
		padding-left: 5px;
	}
`;

export const StyledProductInCartPrInfoText = styled.p`
	height: 3em;
	line-height: 1.5em;
	overflow: hidden;
`;

export const StyledProductInCartBtns = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	margin-top: 15px;

	span {
		margin-right: 10px;
		color: rgb(212, 200, 200);
	}
	@media (max-width: 786px) {
		span {
			margin-right: -2px;
		}
	}
`;

export const StyledInStockText = styled.small`
	padding-top: 5px;
	color: green;
`;

export const StyledProductInCartPrice = styled.div`
	width: 80px;
	padding: 10px;
	text-align: right;
	@media (max-width: 786px) {
		width: 60px;
		padding: 8px;
		font-size: 14px;
	}
`;

export default StyledProductInCartContainer;
