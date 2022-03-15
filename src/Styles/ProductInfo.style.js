import styled from "styled-components";

export const StyledProductInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 10px;
	background-color: white;
	font-size: 13px;
	height: 100vh;
`;

export default StyledProductInfoContainer;

export const StyledProductInfoText = styled.p`
	/* background-color: pink; */
	/* height: 3em; */
	line-height: 1.3em;
	/* overflow: hidden;  */
`;

export const StyledProductInfo = styled.div`
	margin: 15px 0px;
	/* background-color: aqua; */
`;
export const StyledProductInfoPrice = styled.div`
	display: flex;
	padding: 5px 0px;
	/* background-color: white; */
	font-size: 22px;

	small {
		position: relative;
		top: -7px;
		padding-right: 1px;
		/* background-color: aqua; */
		font-size: 11px;
	}
	& :nth-child(3) {
		position: relative;
		top: -7px;
		/* padding-right: 3px; */
		font-size: 11px;
		/* background-color: yellow; */
	}
	p {
		align-self: flex-end;
		/* background-color: red; */
		padding-left: 3px;
		padding-bottom: 2px;
		color: #6b6868;
		font-size: 11px;
	}
	p > span {
		text-decoration: line-through;
	}
	/* width: 80px;
	padding: 10px;
	text-align: right;
	@media (max-width: 786px) {
		width: 60px;
		padding: 0px;
	}
	@media (max-width: 400px) {
		position: relative;
		top: 48px;
		right: 120px;
		font-size: 12px;
	} */
`;

export const StyledInStockText = styled.small`
	/* background-color: gray; */
	display: block;
	margin-top: 15px;
	padding-top: 5px;
	color: green;
`;

export const StyledProductInfoBtns = styled.div`
	/* border: 1px solid blue; */
	/* display: flex;
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
	} */
`;

export const StyledProductAdditionalInfo = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 100px;

	table {
		/* border: 1px solid blue; */
		width: 150px;
		font-size: 10px;
	}
	tr :nth-child(1) {
		color: #6b6868;
	}
`;
