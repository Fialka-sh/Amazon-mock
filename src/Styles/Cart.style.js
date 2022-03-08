import styled from "styled-components";

const StyledCartContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: flex-start;
	max-width: 1500px;
	height: 100vh;
	margin: 0px auto;
	padding: 20px;

	@media (max-width: 786px) {
		display: block;
	}
`;

const StyledCartCheckOut = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: 90px;
	padding: 12px;
	background-color: white;

	p {
		margin-bottom: 25px;
	}
	@media (max-width: 786px) {
		height: 90px;
		margin-bottom: 15px;
		padding: 12px;
	}
`;

const StyledCart = styled.div`
	width: 80%;
	margin-right: 15px;
	padding: 10px;
	background-color: white;

	h1 {
		margin-bottom: -8px;
		font-size: 24px;
		font-weight: 80;
	}
	span {
		display: block;
		text-align: right;
	}
	hr {
		margin-bottom: 10px;
		border-top: 1px solid gray;
	}
	@media (max-width: 786px) {
		width: 100%;
	}
`;

const StyledCartTotal = styled.div`
	padding: 5px 10px 10px 10px;
	text-align: right;
`;

export default StyledCartContainer;
export { StyledCartCheckOut, StyledCart, StyledCartTotal };
