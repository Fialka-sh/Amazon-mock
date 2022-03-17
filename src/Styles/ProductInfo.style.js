import styled from "styled-components";

export const StyledBreadcrumbs = styled.div`
	display: none;
	@media (min-width: 786px) {
		display: block;
		height: 25px;
		padding: 6px;
		padding-left: 12px;
		font-size: 13px;
		color: gray;
	}
`;

export const StyledProductInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px auto;
	padding: 20px;
	background-color: white;
	font-size: 13px;
	max-width: 500px;
	height: 100vh;

	@media (min-width: 786px) {
		max-width: 100vw;
		flex-direction: row;

		& > hr {
			display: none;
		}
	}
`;

export default StyledProductInfoContainer;

export const StyledProductInfoTop = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 786px) {
		width: 80%;
		order: 2;
		padding: 5px 30px;
	}
`;

export const StyledProductInfoText = styled.p`
	line-height: 1.3em;

	@media (min-width: 786px) {
		order: 1;
		line-height: 1.5em;
		font-size: 20px;
	}
`;

export const StyledProductInfoTablePriceArea = styled.div`
	display: none;

	@media (min-width: 786px) {
		order: 3;
		display: block;
		padding: 10px 0px;

		table {
			margin: 10px 0px;

			height: 70px;
		}
		td:nth-child(2) {
			padding-left: 3px;
		}
		tr:nth-child(1) > td:nth-child(2) {
			color: gray;
			text-decoration: line-through;
			font-size: 12px;
		}
		tr:nth-child(2) > td:nth-child(1) {
			float: right;
		}
		tr:nth-child(2) > td:nth-child(2) {
			color: rgb(177, 39, 4);
			font-size: 14px;
		}
		tr:nth-child(3) > td:nth-child(2) {
			color: rgb(177, 39, 4);
			font-size: 12px;
		}

		& > hr {
			margin-top: 10px;
		}
	}
`;

export const StyledProductInfo = styled.div`
	margin: 15px 0px;

	@media (min-width: 786px) {
		order: 3;
		height: 70%;
		margin: 0px;
		border: 1px solid gray;
		border-radius: 8px;
		padding: 8px;
	}
`;
export const StyledProductInfoPrice = styled.div`
	display: flex;
	padding: 5px 0px;
	font-size: 22px;

	small {
		position: relative;
		top: -7px;
		padding-right: 1px;
		font-size: 11px;
	}
	& :nth-child(3) {
		position: relative;
		top: -7px;
		font-size: 11px;
	}
	p {
		display: block;
		align-self: flex-end;
		padding-left: 3px;
		padding-bottom: 2px;
		color: #6b6868;
		font-size: 11px;
	}
	p > span {
		text-decoration: line-through;
	}

	@media (min-width: 786px) {
		p {
			display: none;
		}
	}
`;

export const StyledInStockText = styled.small`
	display: block;
	margin-top: 15px;
	padding-top: 5px;
	color: green;
`;

export const StyledProductInfoBtns = styled.div``;

export const StyledProductAdditionalInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 100px;

	table {
		width: 150px;
		font-size: 10px;
	}
	tr :nth-child(1) {
		color: #6b6868;
	}
	small {
		color: gray;
	}
`;
